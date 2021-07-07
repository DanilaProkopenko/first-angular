import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  wishlistItems = [] as any[];
  product = [] as any [];


  constructor() { }

  addToWishlist(product: any) {
    this.wishlistItems.push({
      id: product.id,
      name: product.name,
      price: product.price,
      qty: 1
    });

    // if (this.cartItems.length === 0) {
    //   this.cartItems.push({
    //     id: product.id,
    //     name: product.name,
    //     price: product.price,
    //     qty: 1,
    //   });
    // } else {
    //   for (let i in this.cartItems) {
    //     if (this.cartItems[i].id === product.id) {
    //       this.cartItems[i].qty++
    //     } else {
    //       this.cartItems.push({
    //         id: product.id,
    //         name: product.name,
    //         price: product.price,
    //         qty: product.qty,
    //       });
    //     }
    //   }
    // }

    console.log(this.wishlistItems);
    console.log("Wishlist: " + this.wishlistItems.length);
  }

  numberOfItems = 0;

  // getNumberOfItems() {
  //   return this.numberOfItems = this.wishlistItems.length;
  // }

  getWishlistItems() {
    return this.wishlistItems;
  }

  
}
