import { Component} from '@angular/core';

import { Hero }    from '../hero';
import { FormsModule }   from '@angular/forms';
import { SimpleserviceService} from '../simpleservice.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-enter-data',
  templateUrl: './enter-data.component.html',
  styleUrls: ['./enter-data.component.css']
})
export class EnterDataComponent {
// uerInput: String;
name:String;
 language:String;
 values: any = [];
constructor(private router: Router,private SimpleserviceService: SimpleserviceService) { }
	 // ngOnInit() {
  //   // debugger

  //   this.uerInput = this.SimpleserviceService.getFromService();

  // }
		onSubmit(form) { 
		 if(form.valid) {
		 this.values.push({name: this.name, language: this.language});
		 form.reset()
		 }
		}
		tblessave(){
			this.SimpleserviceService.tablevaluesave(this.name,this.language);
			// this.SimpleserviceService.tablevaluesave(this.language);
		}
}