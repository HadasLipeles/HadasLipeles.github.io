import { Component } from '@angular/core';
import { UserService} from './_services/user-service.service';
import { User } from './_models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'user-management';
  user: User|null;

  constructor(private userService: UserService){ 
    userService.getCurrentUser().subscribe((user)=> {this.user = user})
  }

  logout() {
    this.userService.logout();
  }
}
