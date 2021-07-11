import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems = [] as any[];
  constructor() { }

  addToCart(product: any) {
    let productExist = false;
    var productPrice = product.price;

    for (let i in this.cartItems) {
      if (this.cartItems[i].productId === product.id) {
        this.cartItems[i].qty++;
        this.cartItems[i].totalPrice += this.cartItems[i].price;

        productExist = true;
        break;
      }
    }

    if (!productExist) {
      this.cartItems.push({
        productId: product.id,
        img: product.img,
        name: product.name,
        price: product.price,
        totalPrice: product.price * product.qty,
        qty: product.qty,
      });
    }

    this.totalCostOfCart();
  }

  cartTotal: number = 0;

  // TODO итоговая стоимость некорректно работает
  totalCostOfCart() {
    this.cartItems.forEach(el => {
      this.cartTotal += (el.qty * el.price)
    });

    return this.cartTotal;
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

  plusQty(product: any) {
    let productId = this.cartItems.indexOf(product);
    this.cartItems[productId].qty++;
    this.cartItems[productId].totalPrice = this.cartItems[productId].price * this.cartItems[productId].qty;
  }

  minusQty(product: any) {
    let productId = this.cartItems.indexOf(product);
    this.cartItems[productId].qty--;
    this.cartItems[productId].totalPrice = this.cartItems[productId].price * this.cartItems[productId].qty;

    if (this.cartItems[productId].qty === 0) {
      this.delete(product)
    }
  }

  cartItemJSON = [] as any[];
  parseToJSONCartItems() {
    this.cartItems.map(el => {
      this.cartItemJSON.push(JSON.parse(JSON.stringify(el)));
    })
    // console.log(this.cartItemJSON)
    return this.cartItemJSON;
  }
}
