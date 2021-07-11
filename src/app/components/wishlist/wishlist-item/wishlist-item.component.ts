import { Component, OnInit, Input, Inject } from '@angular/core';
import { WishlistService } from 'src/app/services/wishlist.service';
import { CartService } from 'src/app/services/cart.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product } from 'src/app/product';
import { WishlistItemModalComponent } from './wishlist-item-modal/wishlist-item-modal.component';

export interface DialogData {
  id: number;
  name: string;
  img: string;
  price: number;
  totalPrice: number;
  qty: number;
  description: string;
}

@Component({
  selector: 'app-wishlist-item',
  templateUrl: './wishlist-item.component.html',
  styleUrls: ['./wishlist-item.component.scss']
})


export class WishlistItemComponent implements OnInit {
  @Input() wishlistItem: any;
  product: any;

  constructor(
    private wishlistService: WishlistService,
    private сartService: CartService,
    public dialog: MatDialog
  ) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(WishlistItemModalComponent, {
      width: '600px',
      data: {
        id: this.wishlistItem.id,
        name: this.wishlistItem.name,
        img: this.wishlistItem.img,
        price: this.wishlistItem.price,
        totalPrice: this.wishlistItem.price * this.wishlistItem.qty,
        qty: this.wishlistItem.qty,
        description: this.wishlistItem.description
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log('The dialog was closed');
      this.product = result;
    });

  }

  ngOnInit(): void {
  }

  delete(item: any) {
    this.wishlistService.delete(item);
  }

  addToCart(item: any) {
    this.сartService.addToCart(item);
    this.wishlistService.delete(item);
  }
}

