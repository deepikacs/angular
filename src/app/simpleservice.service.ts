import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SimpleserviceService {
	// userInput: String;
	var1:String;
	var2:String;
  constructor() { }

  // saveToService(userVal) {
  //   this.userInput = userVal;
  //   console.log("hiii");
  // }

  // getFromService(){
  //   return this.userInput;
  // }
  tablevaluesave(name,language){
  	this.var1=name;
  	this.var2=language;
  	console.log("hello");
  }
  tablevalueget(){
  	return this.var1;
  	}
  tablevaluegets(){
  	return this.var2;
  }
}
