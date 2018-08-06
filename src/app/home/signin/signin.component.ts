import { OnInit, Component, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from './../../core/auth.service';


@Component ({
  templateUrl: './signin.component.html',
  selector: 'app-signin'
})
export class SigninComponent implements OnInit {

  loginForm: FormGroup;
  @ViewChild('userNameInput') userNameInput: ElementRef<HTMLInputElement>;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    if (this.loginForm.valid) {
      const userName = this.loginForm.get('userName').value;
      const password = this.loginForm.get('password').value;
      this.authService.authenticate(userName, password)
        .subscribe(
          () => {
            this.router.navigate(['user', userName]);
          },
          err => {
            console.log(err);
            this.loginForm.reset();
            this.userNameInput.nativeElement.focus();
          }
        );
    }
  }

}
