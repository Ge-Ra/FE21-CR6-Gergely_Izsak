import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: any = [];
  constructor() { }

  addToCart(products: { description: string, destination: string, price: number, image: string }) {
    this.items.push(products);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}
