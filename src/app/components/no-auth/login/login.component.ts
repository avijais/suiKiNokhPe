import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
    public fb: FormBuilder
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
      username: ['', [Validators.required, Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/)]],
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

  onSubmit() {
    console.log('onsubit');
  }

}