import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GlobalConstants } from 'src/app/constants/globalConstants';
import { AuthService } from 'src/app/services/auth/auth.service';
import { first } from 'rxjs/operators';
import { CommonService } from 'src/app/services/common/common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  gConst: any;
  visibility: string = 'visibility_off';
  passwordFildType: string = 'password';

  loginForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private commonSer: CommonService
  ) { }

  ngOnInit(): void {
    this.createLoginForm();
  }

  /**
   * @Description defines the form fields and validators for login form using an FormBuilder
   *  to create an instance of a FormGroup and stored in loginForm property
   * 
   * @Author Avinash Jaiswal
   * */
  createLoginForm() {
    this.loginForm = this.fb.group({
      op: ['login'],
      email: ['', [Validators.required, Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/)]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/)]]
    })
  }

  /**
   * @Description change password input field type as text/password
   *  and show/hide entered password
   * 
   * @Author Avinash Jaiswal
   * */
  showHidePassword() {
    if (this.passwordFildType == 'password') {
      this.passwordFildType = 'text';
      this.visibility = 'visibility'
    } else {
      this.passwordFildType = 'password';
      this.visibility = 'visibility_off'
    }
  }

  /**
   * @Description handle submission of form
   * 
   * @Author Avinash Jaiswal
   * */
  onSubmit() {
    console.log('onsubit');
    this.router.navigate([GlobalConstants.REDIRECT_URLS.DASHBOARD], {});
    this.authService.doLogin(this.loginForm.value)
        .pipe(first())
        .subscribe(
            success => {
              console.log('success : ', success);
              this.commonSer.getRestoDropDown();
              this.commonSer.getUserTypeDropDown();
            },
            err => {
              console.log('login err : ', err);
            }, () => {
              console.log('login next');
            }
        )
  }

}