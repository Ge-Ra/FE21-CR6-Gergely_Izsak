import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { CartComponent } from './cart/cart.component';
import { HomePageComponent } from './home-page/home-page.component';
import { TravelComponent } from './travel/travel.component';

const routes: Routes = [
  {
    path: "", component: HomePageComponent
  },
  {
    path: "blog-page", component: BlogPageComponent
  },
  {
    path: "travel", component: TravelComponent
  },
  {
    path: "cart", component: CartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
