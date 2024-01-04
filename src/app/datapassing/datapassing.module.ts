import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstcomponentComponent } from './firstcomponent/firstcomponent.component';
import { SecondcomponentComponent } from './secondcomponent/secondcomponent.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FirstcomponentComponent,
    SecondcomponentComponent
  ],
  imports: [
    CommonModule,FormsModule
  ],
  exports:[
    FirstcomponentComponent,SecondcomponentComponent
  ]
})
export class DatapassingModule { }
