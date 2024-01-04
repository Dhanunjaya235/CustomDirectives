import { Component } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent {

      myform!:FormGroup;

      constructor(private formbuilder:FormBuilder){
        this.myform = this.formbuilder.group({
          name: ['', Validators.required],
          mail: ['', [Validators.required, Validators.email]]
        });
      }

      onSubmission() {
        if(this.myform.valid){
          console.log(this.myform.value);
        }
        else{
          window.alert("Please Enter Correct Details");
        }
      }

}
