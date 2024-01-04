import { Component } from '@angular/core';
import { DatasharingService } from 'src/app/datasharing.service';
@Component({
  selector: 'app-secondcomponent',
  templateUrl: './secondcomponent.component.html',
  styleUrls: ['./secondcomponent.component.css']
})
export class SecondcomponentComponent {

    data:any;

    constructor(private service:DatasharingService){
      
    }

    ngOnInit(){
      this.service.getData().subscribe(data=>{
        this.data=data
      });
    }
    
}
