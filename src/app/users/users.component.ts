import { Component, OnInit } from '@angular/core';
import { UserService} from '../_services/user-service.service';
import { User } from '../_models/user';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  usersList:User [] = [];

  constructor(private userService: UserService){}

  ngOnInit(): void {
    this.usersList= this.userService.getAllUser();
  }

}
