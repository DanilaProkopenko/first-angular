import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product } from 'src/app/product';
import { DialogData } from '../wishlist-item.component';
import { CartService } from 'src/app/services/cart.service';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-wishlist-item-modal',
  templateUrl: './wishlist-item-modal.component.html',
  styleUrls: ['./wishlist-item-modal.component.scss']
})
export class WishlistItemModalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<WishlistItemModalComponent>,
    private cartService: CartService,
    private wishlistService: WishlistService,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

  addToCart(item: any) {
    this.cartService.addToCart(item);
    this.wishlistService.delete(item);
  }
}

