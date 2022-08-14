import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { User } from '../_models/user';

let usersList:User [] = []; 

@Injectable({providedIn: 'root'})

export class UserService {

  private userSubject: BehaviorSubject<User | null>;
  public user: Observable<User| null>;

  constructor(private router: Router, private http: HttpClient) {
    this.userSubject = new BehaviorSubject<User|null>(null);
    this.user = this.userSubject.asObservable();
  }

   login(email:string, password:string) {
      const user = usersList.find(x => x.email === email && x.password === password);
     
        if (user) {
          this.updateCurrentUser(user);
          this.router.navigate(['/home'])
        }
        else alert('ERROR: User not found!')
       
  }

  getCurrentUser(): Observable<User | null> {
    return this.user;
  }

  public get userValue(): User|null {
    return this.userSubject.value;
  }

  updateCurrentUser(user:User|null){
    this.userSubject.next(user);
  }

  getAllUser() {
    return usersList;
  }

  userAlreadyExist(email:string){
    const user = usersList.find(x => x.email === email);
    if (user) return true;
    return false;
  }

  register(user: User) {
    const isUserAlreadyExist: boolean = this.userAlreadyExist(user.email);
    
    if(!isUserAlreadyExist){
      usersList.push(user);
      alert('Registration completed successfully!')
      this.router.navigate(['/login']);
    }
    else{
      alert('ERROR: User Already Exist!')
      this.router.navigate([this.router.url]).then(() => {
        window.location.reload(); }); // refresh page
    }
  }

  logout() {
    this.updateCurrentUser(null);  // set current user to null
    this.router.navigate(['/home']);
  }

}
