import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { User } from '../_models/user';


@Injectable({providedIn: 'root'})

export class UserService {

  private usersList:User [] = []; 
  private userSubject: BehaviorSubject<User | null>;
  private user: Observable<User| null>;

  constructor(private router: Router, private http: HttpClient) {
    this.userSubject = new BehaviorSubject<User|null>(null);
    this.user = this.userSubject.asObservable();
  }

   login(email:string, password:string) {
      const user = this.usersList.find(x => x.email === email && x.password === password);
     
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

  private updateCurrentUser(user:User|null){
    this.userSubject.next(user);
  }

  getAllUser() {
    return this.usersList;
  }

  userAlreadyExist(email:string){
    const user = this.usersList.find(x => x.email === email);
    if (user) return true;
    return false;
  }

  register(user: User) {
    const isUserAlreadyExist: boolean = this.userAlreadyExist(user.email);
    
    if(!isUserAlreadyExist){
      this.usersList.push(user);
      alert('Registration completed successfully!')
      this.router.navigate(['/login']);
    }
    else{
      alert('ERROR: User Already Exist!')
    }
  }

  logout() {
    this.updateCurrentUser(null);  // set current user to null
    this.router.navigate(['/home']);
  }

}
