import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'pzs-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.scss'],
})
export class SignInPageComponent implements OnInit {
  loginForm!: FormGroup;
  loading: boolean = false;
  error: boolean = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true],
    });
  }

  submitForm(): void {
    if (this.loginForm.valid) {
      this.error = false;
      const { password, email, remember } = this.loginForm.value;

      this.authService.logIn({ password, email }).subscribe(
        (res) => {
          if (res.accessToken) {
            this.authService.setToken(res.accessToken);
            remember && this.authService.setTokenToStorage(res.accessToken);

            this.authService.getUser().subscribe((res) => {
              this.authService.user$.next(new User(res));
              this.router.navigate(['/profile']);
            });
          } else {
            this.error = true;
          }
        },
        () => (this.error = true)
      );
    } else {
      Object.values(this.loginForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
}
