import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
import { Location } from '@angular/common';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  
  @Input() product!: Product;
  // @Input() productItem: Product;
  // @Input() productItem: any;

  constructor(
    private cartService: CartService,
    private wishlistService: WishlistService,
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.productService.getProduct(id)
      .subscribe(product => this.product = product);
  }

  addToCart(product: any) {
    this.cartService.addToCart(product);
  }

  addToWishlist(product: any){
    this.wishlistService.addToWishlist(product)
  }

  //Переход назад по странице
  goBack(): void {
    this.location.back();
  }

}
