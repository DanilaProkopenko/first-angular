import { Component, OnInit } from '@angular/core';
import { WishlistService } from 'src/app/services/wishlist.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {

  constructor(
    private wishlistService: WishlistService,
    private сartService: CartService
  ) { }

  wishlistItems = [] as any[];

  ngOnInit(): void {
    this.wishlistItems = this.wishlistService.getWishlistItems();
  }

  delete(item: any) {
    this.wishlistService.delete(item);
  }

  addToCart(item: any){
    this.сartService.addToCart(item);
    this.wishlistService.delete(item);
  }
}
