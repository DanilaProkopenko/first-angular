import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product';
import { ProductService } from 'src/app/services/product.service';
import { CartService } from 'src/app/services/cart.service';
import { WishlistService } from 'src/app/services/wishlist.service';



@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  products: Product[] = [];
  product = [] as any[];
  getNumberOfItems = 0;

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private wishlistService: WishlistService,

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

}
