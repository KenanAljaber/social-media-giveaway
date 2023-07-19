import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefineWinnersPageComponent } from './pages/define-winners-page/define-winners-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [
  { path: 'define-winners', component: DefineWinnersPageComponent },
  { path: '**', component: HomePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
