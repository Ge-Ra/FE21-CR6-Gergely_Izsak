import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  sum: number = 0;
  discount: number = 0;
  showDisc: string = "";
  items: any;
  checkoutForm: any;
  constructor(private cartService: CartService, private formBuilder: FormBuilder) {
    this.checkoutForm = this.formBuilder.group({
      fName: '',
      lName: '',
      address: '',
      email: ''
    });
  }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
    var a: number = 0;
    for (let val of this.items) {
      a += val.price;
    }
    this.sum = a;
    if (this.sum > 200 && this.sum < 500) {
      this.discount = Math.floor(this.sum * 0.9)
      this.showDisc = "10";
    }
    else if (this.sum > 500) {
      this.discount = Math.floor(this.sum * 0.8)
      this.showDisc = "20";
    }
    else {
      this.showDisc = "";
    }
  }

  onSubmit(customerData: any) {
    console.warn('Order placed!', customerData);
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
  }
}