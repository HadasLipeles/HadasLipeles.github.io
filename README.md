# User-Management

A simple client-side web application to manage users:

* A new user can register
* An existing user can log in and out.
* List of users can be displayed at any time.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.1.2. </br>
Styling of the app is done with bootstrap 5.0.2

The project is backendless.

## Deployment

https://hadaslipeles.github.io

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## My decisions

The app structure:
 
 * Models: User model is a class that defines the properties of a user.
 * Components: home, login, register and users. Each component has its own features, methods and template. 
 * Services: UserService contains all methods that related to user: login, logout, registration and get users.

The users data is stored in a list, and it is accessible only for UserService.</br>
UserService has two properties: userSubject (BehaviorSubject) and user (Observable).</br>

BehaviorSubject (part of the RxJs library) is used for cross component communications. </br>
A BehaviorSubject holds one value, and when it is subscribed it emits that value immediately. </br>
It ensures that all the other component always receives the most recent data of connected user. </br>
I use it as a workaround that helps to know at any time and in any component, who is the logged in user. </br> 

The user property is observable (Observable<User>) so any component can subscribe to be notified when a user </br>
logs in/out.



