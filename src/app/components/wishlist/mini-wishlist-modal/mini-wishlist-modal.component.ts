import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-mini-wishlist-modal',
  templateUrl: './mini-wishlist-modal.component.html',
  styleUrls: ['./mini-wishlist-modal.component.scss']
})
export class MiniWishlistModalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<MiniWishlistModalComponent>,
    private ws: WishlistService
  ) { }

  ngOnInit(): void {
    this.getItems();
    console.log(this.items);
  }

  items = [] as any [];
  getItems(){
    this.items = this.ws.getWishlistItems();
    this.items = this.items.slice(-5);
    return this.items;
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

}
