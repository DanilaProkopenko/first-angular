import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartItems = [] as any[];
  // getNumberOfItems = 0;

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
    // this.getNumberOfItems = this.cartService.getNumberOfItems();
  }

  // clearCart(){
  //   this.cartService.clearCart();
  //   console.log(this.cartItems)
  // }

  delete(item: any) {
    this.cartService.delete(item);
  }

  plusQty(item: any) {
    this.cartService.plusQty(item);
  }

  minusQty(item: any) {
    this.cartService.minusQty(item);
  }

  
}
