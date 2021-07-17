import { Component, OnInit } from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  products = products;
  constructor() { }

  ngOnInit(): void {
  }
}
