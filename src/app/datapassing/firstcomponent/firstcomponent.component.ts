import { Component,Input } from '@angular/core';
import { DatasharingService } from 'src/app/datasharing.service';
@Component({
  selector: 'app-firstcomponent',
  templateUrl: './firstcomponent.component.html',
  styleUrls: ['./firstcomponent.component.css']
})
export class FirstcomponentComponent {

      @Input()data:any;

      constructor(private servcie:DatasharingService){}

      setData(){
        this.servcie.setData({
          message:this.data
        });
      }
}
