import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
	name = '';
 language = '';
 values: any = [];
  constructor() { }

  ngOnInit() {
  }
  onSubmit(form) { 
		 if(form.valid) {
		 this.values.push({name: this.name, language: this.language});
		 form.reset()
		 }
		}

}
