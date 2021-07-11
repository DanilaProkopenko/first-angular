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



  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems()
    this.wishlistItems = this.wishlistService.getWishlistItems();
  }

  //итоговая цена
  get totalPrice()
  {
    return this.cartItems.reduce((sum,x)=>
    ({qty:1,
      price:sum.price+x.qty*x.price}),
    {qty:1,price:0}).price;
  }
}
