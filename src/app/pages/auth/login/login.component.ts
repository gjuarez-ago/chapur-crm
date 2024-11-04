import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public validateForm!: FormGroup;
  public subcriptions: Subscription[] = [];
  public siteKey = "6Le4ykYbAAAAAKH9QLPRmgCvuaZmuOFzYSyX9IW3";
  public isSpinning = false;
  public role: string = '';

  constructor(
 
    private fb: FormBuilder,
    private router: Router,
    private message: NzMessageService,
  ) { 
    this.validateForm = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
      recaptcha: ['', Validators.required],
      remember: [true],
    });
  }

  ngOnInit(): void {
  
  
  }

  submitForm(): void {

    this.router.navigate(["l/customers"]);
   
  }

  createMessage(type: string, message: string): void {
    this.message.create(type, message);
  }

}
