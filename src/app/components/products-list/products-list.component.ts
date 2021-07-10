import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product';
import { ProductService } from 'src/app/services/product.service';
import { CartService } from 'src/app/services/cart.service';
import { WishlistService } from 'src/app/services/wishlist.service';


import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductItemModalComponent } from './product-item-modal/product-item-modal.component';

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
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  products: Product[] = [];
  // product = [] as any[];
  product: any;
  getNumberOfItems = 0;

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private wishlistService: WishlistService,
    public dialog: MatDialog


  ) { }

  ngOnInit(): void {
    this.getProducts(); //показ продуктов на главной странице

    // this.bookService.bookUpdateListener().subscribe((response) => {
    //   this.addedBook = response;//this will happen every time the service class 
    //   //updates the book
    // });
    // //Here you can call the get book method
    // this.bookService.getBookList();
  }

  getProducts() {
    this.productService.getProducts()
      .subscribe(products => this.products = products)
  }

  addToCart(product: any) {
    this.cartService.addToCart(product);
  }

  addToWishlist(product: any) {
    this.wishlistService.addToWishlist(product)
  }



  openDialog(product: any): void {
    const dialogRef = this.dialog.open(ProductItemModalComponent, {
      width: '1000px',
      data: {
        id: product.id,
        name: product.name,
        img: product.img,
        price: product.price,
        totalPrice: product.price * product.qty,
        qty: product.qty = 1,
        description: product.description
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log('The dialog was closed');
      this.product = result;
    });

    // console.log(this.products.indexOf(product))
    // console.log()
  }


}
