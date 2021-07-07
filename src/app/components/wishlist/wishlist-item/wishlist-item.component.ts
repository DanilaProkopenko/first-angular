import { Component, OnInit, Input } from '@angular/core';
import { WishlistService } from 'src/app/services/wishlist.service';

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
    private wishlistService: WishlistService
  ) { }

  ngOnInit(): void {
  }

  msg() {
    console.log(this.wishlistItem);
  }

  indexOfWishlist() {
    console.log(this.wishlistItem);
    console.log("\nwishlistItems");
    console.log(this.wishlistItems);
    // for (let i in this.wishlistItems) {
    //   console.log(this.wishlistItems[i]);
    // }
  }

  deleteFromWishlist() {
    // this.wishlistItems.splice(this.wishlistItems.indexOf(this.product), 1);
    this.wishlistItem.splice(this.wishlistItem, 1);
    // rerender your array
    // return this.wishlistItems = [...this.product];
  }


}
