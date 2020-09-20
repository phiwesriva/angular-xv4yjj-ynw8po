import { Injectable } from '@angular/core';

@Injectable(
  {providedIn: 'root'}
)
export class CartService {
items = [];
  constructor() { }
addToCart(product, dress) {
    this.items.push(product);
   this.items.push(dress)
   }

 /*  
addToCart(dress)
{
this.items.push(dress);
}*/
  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
  getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }
}