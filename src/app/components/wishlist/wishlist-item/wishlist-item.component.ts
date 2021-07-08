import { Component, OnInit, Input } from '@angular/core';
import { WishlistService } from 'src/app/services/wishlist.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-wishlist-item',
  templateUrl: './wishlist-item.component.html',
  styleUrls: ['./wishlist-item.component.scss']
})
export class WishlistItemComponent implements OnInit {
  @Input() wishlistItem: any;
  product: any;
  wishlistItems = [] as any[];

  constructor(
    private wishlistService: WishlistService,
    private сartService: CartService,
  ) { }

  ngOnInit(): void {
  }

  msg() {
    console.log(this.wishlistItem);
  }

  delete(item: any) {
    this.wishlistService.delete(item);
  }

  addToCart(item: any){
    this.сartService.addToCart(item);
    this.wishlistService.delete(item);
  }
}
