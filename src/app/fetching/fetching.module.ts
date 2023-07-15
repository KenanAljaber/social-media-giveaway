import { NgModule } from "@angular/core";
import { HomePageComponent } from './pages/home-page/home-page.component';
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import {HttpClientModule} from "@angular/common/http"
import { PostFetcherService } from "./services/postfetcher.service";
import { DesktopHeroSectionComponent } from './components/desktop-hero-section/desktop-hero-section.component';
import { SearchPostWidgetComponent } from './components/search-post-widget/search-post-widget.component';

@NgModule({
    declarations: [
        HomePageComponent,
        DesktopHeroSectionComponent,
        SearchPostWidgetComponent,

    ],
    imports: [
        FormsModule,
        CommonModule,
        HttpClientModule
    ],
    providers: [PostFetcherService],
    exports: [HomePageComponent]
})
export class FetchingModule { }