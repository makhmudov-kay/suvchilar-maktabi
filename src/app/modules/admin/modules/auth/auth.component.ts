import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthComponent implements OnInit {
  /**
   *
   */
  validateForm!: UntypedFormGroup;

  /**
   *
   * @param fb
   * @param router
   */
  constructor(private fb: UntypedFormBuilder, private router: Router) {}

  /**
   *
   */
  ngOnInit(): void {
    this.initForm();
  }

  /**
   *
   */
  private initForm() {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });
  }

  submitForm(): void {
    // if (this.validateForm.valid) {
    //   console.log('submit', this.validateForm.value);
    // } else {
    //   Object.values(this.validateForm.controls).forEach((control) => {
    //     if (control.invalid) {
    //       control.markAsDirty();
    //       control.updateValueAndValidity({ onlySelf: true });
    //     }
    //   });
    // }
    this.router.navigate(['admin']);
  }
}
