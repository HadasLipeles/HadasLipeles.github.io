import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService} from '../_services/user-service.service';



@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginForm: FormGroup;
  isSubmitted = false;

  constructor( 
    private formBuilder: FormBuilder,
    private route: ActivatedRoute, //TODO
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email:    ['', [Validators.required, Validators.pattern ("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      password: ['', [Validators.required, Validators.minLength(6)]]
  });
  }

  onSubmit() {
    
    this.isSubmitted = true;
    if (this.loginForm.invalid) 
      return;
  
    const email :string = this.loginForm.get('email')?.value;
    const password :string = this.loginForm.get('password')?.value;
    this.userService.login(email,password);
    this.resetForm()
  }

  resetForm(){
    this.loginForm.reset();
    this.isSubmitted = false;
  }
  
}
