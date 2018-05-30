import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SimpleserviceService {
	userInput: String;
  constructor() { }

  saveToService(userVal) {
    this.userInput = userVal;
    debugger;
    console.log("hiii");
  }

  getFromService(){
    return this.userInput;
  }
}
