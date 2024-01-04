import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ReactiveformComponent
  ],
  imports: [
    CommonModule,ReactiveFormsModule
  ],
  exports:[
    ReactiveformComponent
  ]
})
export class MyformsModule { }
