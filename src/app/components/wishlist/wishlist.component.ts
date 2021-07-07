import { Component, OnInit } from '@angular/core';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {

  constructor(
    private wishlistService: WishlistService
  ) { }

  wishlistItems = [] as any[];

  indexOfWishlist() {
    // console.log(this.wishlistItems);
    for (let i in this.wishlistItems) {
      console.log(this.wishlistItems);
    }
  }

  ngOnInit(): void {
    this.wishlistItems = this.wishlistService.getWishlistItems();
  }
}
