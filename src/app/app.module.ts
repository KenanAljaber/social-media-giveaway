import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FetchingModule } from './fetching/fetching.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FetchingModule,
    FormsModule,
    SharedModule
    
  ],
  providers: [


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
