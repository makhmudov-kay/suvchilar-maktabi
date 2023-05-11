import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'app-get-sertificate',
  templateUrl: './get-sertificate.component.html',
  styleUrls: ['./get-sertificate.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GetSertificateComponent implements OnInit {
  getSertificate = true;

  form!: UntypedFormGroup;

  constructor(private fb: UntypedFormBuilder, private cd: ChangeDetectorRef) {}

  ngOnInit() {
    this.form = this.fb.group({
      sertificate_id: [null],
    });
  }

  searchSertificate() {
    console.log(1);
    
    this.getSertificate = !this.getSertificate;
    this.cd.markForCheck();
  }
}
