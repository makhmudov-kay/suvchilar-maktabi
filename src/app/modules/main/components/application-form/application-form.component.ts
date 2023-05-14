import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { ApplicationsService } from './services/applications.service';
import { District, Region } from './models/region-and-districts.response';
import { RegionsAndDistrictsService } from './services/regions-and-districts.service';

@Component({
  selector: 'app-application-form',
  templateUrl: './application-form.component.html',
  styleUrls: ['./application-form.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApplicationFormComponent implements OnInit {
  /**
   *
   */
  formStepFirst!: UntypedFormGroup;

  /**
   *
   */
  formStepSecond!: UntypedFormGroup;

  /**
   *
   */
  current = 0;

  /**
   *
   */
  position = 1;

  /**
   *
   */
  phone!: string;

  /**
   *
   */
  gender = 1;

  /**
   *
   */
  isLoading = false;

  /**
   *
   */
  certificate!: string;

  /**
   *
   */
  region!: Region[];

  /**
   *
   */
  districts!: District[];

  /**
   *
   */
  selectedRegion!: number;

  /**
   *
   * @param fb
   * @param $application
   * @param cd
   */
  constructor(
    private fb: UntypedFormBuilder,
    private $application: ApplicationsService,
    private $regionsAndDistricts: RegionsAndDistrictsService,
    private cd: ChangeDetectorRef
  ) {}

  /**
   *
   */
  private initFirstForm() {
    this.formStepFirst = this.fb.group({
      phone: [null],
      gender: [null],
      l_name: [null, [Validators.required]],
      f_name: [null, [Validators.required]],
      s_name: [null, [Validators.required]],
      birthday: [null, [Validators.required]],
    });
  }

  /**
   *
   */
  private initSecondForm() {
    this.formStepSecond = this.fb.group({
      phone: [null],
      farm_name: [null, [Validators.required]],
      district_id: [null, [Validators.required]],
      position: [null],
      farm_type: [null, [Validators.required]],
    });
  }

  /**
   *
   */
  private getRegionsAndDistricts() {
    this.$regionsAndDistricts.getRegionAndDistricts().subscribe((result) => {
      this.region = result.data;
      this.cd.markForCheck();
    });
  }

  /**
   *
   */
  ngOnInit() {
    this.getRegionsAndDistricts();
    this.initFirstForm();
    this.initSecondForm();
  }

  inputPhone(value: string) {
    console.log(value);
    
  }

  /**
   *
   * @param region
   */
  regionChange(region: Region) {
    this.districts = region.districts;
    this.cd.markForCheck();
  }

  /**
   *
   */
  next(): void {
    console.log(this.current);

    this.current += 1;
    console.log(this.current);
    this.cd.markForCheck();
  }

  /**
   *
   */
  done(): void {
    this.current = 0;
    this.formStepFirst.reset();
    this.formStepSecond.reset();
  }

  /**
   *
   */
  submitFirstStep() {
    if (this.formStepFirst.invalid && !this.phone) {
      return;
    }

    const request = this.formStepFirst.getRawValue();
    request.phone = '+998' + this.phone;
    request.gender = this.gender;

    this.isLoading = true;
    this.$application.sendFirstStep(request).subscribe((result) => {
      if (result.success) {
        this.next();
        this.isLoading = false;
      } else {
        console.log('ERROR');
      }
      this.cd.markForCheck();
    });
  }

  /**
   *
   */
  submitSecondStep() {
    const request = this.formStepSecond.getRawValue();
    request.position = this.position;
    request.phone = '+998' + this.phone;

    this.isLoading = true;
    this.$application.sendSecondStep(request).subscribe((result) => {
      if (result.success) {
        this.certificate = result.data.certificate_id;
        this.next();
        this.isLoading = false;
      } else {
        console.log('ERROR');
      }

      this.cd.markForCheck();
    });
  }
}
