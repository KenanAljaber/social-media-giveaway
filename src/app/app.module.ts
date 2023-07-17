import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FetchingModule } from './fetching/fetching.module';
import { SharedModule } from './shared/shared.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ShowWarningService } from './shared/services/show-warning.service';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FetchingModule,
    FormsModule,
    SharedModule
    
  ],
  providers: [
    ShowWarningService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
