import { Component, OnInit } from '@angular/core';
import { products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.css']
})
export class TravelComponent implements OnInit {
  products = products;
  constructor(private CS: CartService) { }
  
  addToCart(products: any) {
    alert("This item is added to the cart");
    this.CS.addToCart(products);

  }

  ngOnInit(): void {
  }

}
