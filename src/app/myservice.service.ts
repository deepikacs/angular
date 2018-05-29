import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor() { }

 saveToService(userVal) {
    this.userInput = userVal;
    console.log("hiii");
}
 getFromService(){
    return this.userInput;
  }
}