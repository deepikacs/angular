import { Component} from '@angular/core';

import { Hero }    from '../hero';
import { FormsModule }   from '@angular/forms';

@Component({
  selector: 'app-enter-data',
  templateUrl: './enter-data.component.html',
  styleUrls: ['./enter-data.component.css']
})
export class EnterDataComponent {
name = '';
 language = '';
 values: any = [];
 onSubmit(form) { 
 if(form.valid) {
 this.values.push({name: this.name, language: this.language});
 form.reset()
 }
}


