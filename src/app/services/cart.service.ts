import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems = [] as any[];

  constructor() { }

  addToCart(product: any) {
    let productExist = false;

    for (let i in this.cartItems) {
      if (this.cartItems[i].productId === product.id) {
        this.cartItems[i].qty++;
        productExist = true;
        break;
      }
    }

    if (!productExist) {
      this.cartItems.push({
        productId: product.id,
        name: product.name,
        price: product.price,
        qty: product.qty
      });
    }

    // console.log("Cart: " + this.cartItems.length);
  }

  getCartItems() {
    return this.cartItems;
  }

  // clearCart() {
  //   this.cartItems = [];
  //   return this.cartItems;
  // }

  delete(product: any) {
    this.cartItems.splice(this.cartItems.indexOf(product), 1);
  }

  plusQty(product:any){
    let productId = this.cartItems.indexOf(product);
    this.cartItems[productId].qty++;
  }

  minusQty(product: any){
    let productId = this.cartItems.indexOf(product);
    this.cartItems[productId].qty--;

    if(this.cartItems[productId].qty === 0){
      this.delete(product)
    }
  }
}
