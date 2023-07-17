import {NgModule} from "@angular/core";
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PopupMessageComponent } from './components/popup-message/popup-message.component';



@NgModule({
    imports:[

    ],
    providers:[],
    declarations: [
      FooterComponent,
      NavbarComponent,
      PopupMessageComponent
    ],
    exports:[
      FooterComponent,
      NavbarComponent,
      PopupMessageComponent
    ]

})
export class SharedModule{};