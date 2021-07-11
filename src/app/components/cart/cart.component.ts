import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { WishlistService } from 'src/app/services/wishlist.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartItems = [] as any[];
  cartTotal : any;
  cartItemJSON : any;

  constructor(
    private cartService: CartService,
    private wishlistService: WishlistService,
  ) { }

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
    // this.cartItemJSON = this.parseToJSONCartItems();
  }

  delete(item: any) {
    this.cartService.delete(item);
  }

  plusQty(item: any) {
    this.cartService.plusQty(item);
  }

  minusQty(item: any) {
    this.cartService.minusQty(item);
  }

  addToWishlist(item: any) {
    this.wishlistService.addToWishlist(item);
    this.cartService.delete(item);
  }

  parseToJSONCartItems() {
    console.log(this.cartItemJSON);
    return this.cartItemJSON = this.cartService.parseToJSONCartItems();
  }

  //итоговая цена в рельном времени
  get totalPrice()
  {
    return this.cartItems.reduce((sum,x)=>
    ({qty:1,
      price:sum.price+x.qty*x.price}),
    {qty:1,price:0}).price;
  }
}
