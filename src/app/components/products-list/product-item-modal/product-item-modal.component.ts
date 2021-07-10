import { Component, OnInit, Inject } from '@angular/core';
import { DialogData } from '../products-list.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CartService } from 'src/app/services/cart.service';
import { WishlistService } from 'src/app/services/wishlist.service';
import { ProductService } from 'src/app/services/product.service';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-product-item-modal',
  templateUrl: './product-item-modal.component.html',
  styleUrls: ['./product-item-modal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProductItemModalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ProductItemModalComponent>,
    private cartService: CartService,
    private wishlistService: WishlistService, 
    private productService: ProductService,
    @Inject(MAT_DIALOG_DATA) public data: DialogData)
    { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  addToCart(product: any){
    this.cartService.addToCart(product);
  }

  addToWishlist(product: any){
    this.wishlistService.addToWishlist(product);
  }

  plusQty(product: any) {
    this.productService.plusQty(product);
  }

  minusQty(product: any){
    this.productService.minusQty(product);
  }
}
