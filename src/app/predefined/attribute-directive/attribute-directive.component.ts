import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-attribute-directive',
  templateUrl: './attribute-directive.component.html',
  styleUrls: ['./attribute-directive.component.css']
})
export class AttributeDirectiveComponent {

    @Input() size:number;

    constructor(){
      this.size=0;
    }
}
