import {NgModule} from "@angular/core";
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';



@NgModule({
    imports:[

    ],
    providers:[],
    declarations: [
      FooterComponent,
      NavbarComponent
    ],
    exports:[
      FooterComponent,
      NavbarComponent,
    ]

})
export class SharedModule{};