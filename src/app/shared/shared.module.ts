import {NgModule} from "@angular/core";
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PopupMessageComponent } from './components/popup-message/popup-message.component';
import { CommonModule } from "@angular/common";
import { SelectWinnersWidgetComponent } from './components/select-winners-widget/select-winners-widget.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClrProgressBarModule } from "@clr/angular";



@NgModule({
    imports:[
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      ClrProgressBarModule
    ],
    providers:[],
    declarations: [
      FooterComponent,
      NavbarComponent,
      PopupMessageComponent,
      SelectWinnersWidgetComponent
    ],
    exports:[
      FooterComponent,
      NavbarComponent,
      PopupMessageComponent,
      SelectWinnersWidgetComponent
    ]

})
export class SharedModule{};