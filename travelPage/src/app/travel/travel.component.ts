import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.css']
})
export class TravelComponent implements OnInit {
  products: any = products;
  constructor(private route: ActivatedRoute, private CS: CartService) { }

  addToCart(products: any) {
    window.alert("Item added to your cart");
    this.CS.addToCart(products);
  }

  ngOnInit(): void {
  }
}