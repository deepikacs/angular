import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
// import { MyserviceService } from '../myservice.service';
import { SimpleserviceService} from '../simpleservice.service';

@Component({
  selector: 'app-enterdata1',
  templateUrl: './enterdata1.component.html',
  styleUrls: ['./enterdata1.component.css']
})
export class Enterdata1Component implements OnInit {
	userVal: String;
  constructor(private router: Router,private SimpleserviceService: SimpleserviceService) { }
// private MyserviceService: MyserviceService
  ngOnInit() {}
  	// mySave(){ 
  	// 	this.SimpleserviceService.saveToService(this.userVal); } 
  	}
  	