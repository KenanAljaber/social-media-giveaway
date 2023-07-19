import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FetchingModule } from './fetching/fetching.module';
import { SharedModule } from './shared/shared.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ShowWarningService } from './shared/services/show-warning.service';
import { BlockUIModule } from 'ng-block-ui';
import { DefineWinnersPageComponent } from './pages/define-winners-page/define-winners-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    DefineWinnersPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FetchingModule,
    FormsModule,
    SharedModule,
    BlockUIModule.forRoot(),
    
  ],
  exports:[
    AppRoutingModule
  ],
  providers: [
    ShowWarningService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
