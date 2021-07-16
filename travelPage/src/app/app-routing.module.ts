import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { TravelsPageComponent } from './travels-page/travels-page.component';

const routes: Routes = [
  {
    path: "", component: HomePageComponent
  },
  {
    path: "blog-page", component: BlogPageComponent
  },
  {
    path: "travels-page", component: TravelsPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
