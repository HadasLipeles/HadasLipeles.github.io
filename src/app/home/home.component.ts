import { Component, OnInit } from '@angular/core';
import { UserService} from '../_services/user-service.service';
import { User } from '../_models/user';

@Component({
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css']
})

export class HomeComponent {

  user: User;
  
  constructor(private userService: UserService) { }
  
  ngOnInit() {
    if (this.userService.userValue)
    this.user = this.userService.userValue;
  }  
}
