import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  //async ngOnInit() {
   // this.cartItem = await this.cartService.getCart();
   // this.cartService.prodCountCountChange.subscribe(
    //    newProdCount => this.cartCount = newProdCount
   // );
//}
// and don't forget to unsubscribe
ngOnDestroy() {
   this.cartService.prodCountCountChange.unsubscribe();
}

}
//
//async ngOnInit() {
  //  this.cartItem = await this.cartService.getCart();
    //this.cartService.prodCountCountChange.subscribe(
      //  newProdCount => this.cartCount = newProdCount
    //);
//}
// and don't forget to unsubscribe
//ngOnDestroy() {
 //   this.cartService.prodCountCountChange.unsubscribe();
//}