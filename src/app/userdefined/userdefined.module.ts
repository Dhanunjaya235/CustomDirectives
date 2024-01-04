import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StructuralComponent } from './structural/structural.component';
import { MystructuralDirective } from './mystructural.directive';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    StructuralComponent,
    MystructuralDirective
  ],
  imports: [
    CommonModule,FormsModule,ReactiveFormsModule
  ],
  exports:[
    StructuralComponent,
    MystructuralDirective
  ]
})
export class UserdefinedModule { }
