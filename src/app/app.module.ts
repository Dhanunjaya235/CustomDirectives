import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PredefinedModule } from './predefined/predefined.module';
import { UserdefinedModule } from './userdefined/userdefined.module';
import { MyformsModule } from './myforms/myforms.module';
import { DatasharingService } from './datasharing.service';
import { DatapassingModule } from './datapassing/datapassing.module';
import { TestCompComponent } from './app/test/test-comp/test-comp.component';
@NgModule({
  declarations: [
    AppComponent,
    TestCompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PredefinedModule,
    UserdefinedModule,
    MyformsModule,
    DatapassingModule,
    FormsModule
  ],
  providers: [DatasharingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
