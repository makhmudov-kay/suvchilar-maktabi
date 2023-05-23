import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

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
   */
  isLoading = false;

  /**
   *
   * @param fb
   * @param router
   * @param $auth
   */
  constructor(
    private fb: UntypedFormBuilder,
    private router: Router,
    public $auth: AuthService
  ) {}

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
      login: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });
  }

  /**
   *
   */
  submitForm(): void {
    if (this.validateForm.invalid) {
      Object.values(this.validateForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
      return;
    }

    const request = this.validateForm.getRawValue();
    this.isLoading = true;
    this.$auth.login(request).subscribe({
      next: (result) => {
        if (result.role === 1) {          
          localStorage.setItem('admin', JSON.stringify(true));
        }
        this.validateForm.reset();
        this.router.navigate(['admin']);
        this.isLoading = false;
      },
      error: (err) => {
        this.isLoading = false;
      },
    });
  }
}
