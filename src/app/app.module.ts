import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GeneralInformationComponent } from './component/general-information.component';
import { GridViewComponent } from './component/grid-view.component';

@NgModule({
  declarations: [
    AppComponent,    
    GeneralInformationComponent,
    GridViewComponent     
  ],
  imports: [    
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
