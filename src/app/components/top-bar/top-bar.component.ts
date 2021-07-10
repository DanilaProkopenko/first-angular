import { Component, OnInit } from '@angular/core';
import { CartComponent } from '../cart/cart.component';
import { CartService } from 'src/app/services/cart.service';
import { WishlistService } from 'src/app/services/wishlist.service';


@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
  // encapsulation: ViewEncapsulation.None,
})
export class TopBarComponent implements OnInit {

  constructor(
    private cartService: CartService,
    private wishlistService: WishlistService,
  ) { }

  cartItems = [] as any[];
  wishlistItems = [] as any[];
  allPrice = 0;


  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems()
    this.wishlistItems = this.wishlistService.getWishlistItems();
    this.allPrice = this.cartService.allPrice;

  }

  // totalPrice() {
  // }

}
