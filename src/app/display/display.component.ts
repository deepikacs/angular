import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { SimpleserviceService} from '../simpleservice.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
	name:String;
	language:String;
  constructor(private router: Router,private SimpleserviceService: SimpleserviceService) { }

  ngOnInit() {
  	
  	this.name=this.SimpleserviceService.tablevalueget();
  	this.language=this.SimpleserviceService.tablevaluegets();
  }
  

}
