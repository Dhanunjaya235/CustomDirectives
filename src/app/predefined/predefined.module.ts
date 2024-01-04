import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttributeDirectiveComponent } from './attribute-directive/attribute-directive.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AttributeDirectiveComponent
  ],
  imports: [
    CommonModule,FormsModule
  ],
  exports:[
    AttributeDirectiveComponent
  ]
})
export class PredefinedModule { }
