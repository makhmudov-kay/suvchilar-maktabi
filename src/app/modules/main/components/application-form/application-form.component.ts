import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'app-application-form',
  templateUrl: './application-form.component.html',
  styleUrls: ['./application-form.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApplicationFormComponent implements OnInit {
  formStepFirst!: UntypedFormGroup;
  formStepSecond!: UntypedFormGroup;

  current = 1;

  position = 1;

  sex = 'man';

  constructor(private fb: UntypedFormBuilder) {}

  ngOnInit() {
    this.formStepFirst = this.fb.group({
      phone: [null],
      sex: [this.sex],
      lastName: [null],
      firstName: [null],
      surname: [null],
      date: [null],
    });

    this.formStepSecond = this.fb.group({
      company: [null],
      region: [null],
      district: [null],
      position: [this.position],
      category: [null],
    });
  }

  pre(): void {
    this.current -= 1;
    this.changeContent();
  }

  next(): void {
    this.current += 1;
    this.changeContent();
  }

  done(): void {
    console.log('done');
  }

  changeContent(): void {}

  onIndexChange(index: number): void {
    this.current = index;
  }

  submitFirstStep() {}
  submitSecondStep() {}
}
