import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService} from '../_services/user-service.service';

@Component({
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  signUpForm: FormGroup;
  isSubmitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService

  ) { }

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      firstName:['', [Validators.required, Validators.pattern("[a-zA-Z]{2,}")]],
      lastName: ['', [Validators.required, Validators.pattern("[a-zA-Z]{2,}")]],
      email:    ['', [Validators.required, Validators.pattern ("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      password: ['', [Validators.required, Validators.minLength(6)]]
  });
  
}

onSubmit() {
  this.isSubmitted = true;

  if (this.signUpForm.invalid) 
    return;
 
  this.userService.register(this.signUpForm.value);
  this.signUpForm.reset();
  }

  resetForm(){
    this.signUpForm.reset();
    this.isSubmitted = false;
  }

} 
