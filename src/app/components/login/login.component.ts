import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly router: Router,
    private readonly auth: AuthService,
  ){}

  ngOnInit(): void {
      this.createForm();
  }

  getUserByEmailAndPassword = () => {

  }

  submit = () => {
    const { username, password } = this.loginForm.getRawValue();
    const user = this.auth.getUserByEmailAndPassword({username, password});
    if (!!user) {
      this.router.navigateByUrl('dashboard');
    }

  }

  createForm = () => {
    this.loginForm = this.formBuilder.group({
      username: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required])
    })
  }
}
