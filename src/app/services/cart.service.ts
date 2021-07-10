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
        this.cartItems[i].price += productPrice;
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
        qty: product.qty,
      });
    }
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

  }

  minusQty(product: any) {
    let productId = this.cartItems.indexOf(product);
    this.cartItems[productId].qty--;

    if (this.cartItems[productId].qty === 0) {
      this.delete(product)
    }
  }

  allPrice = 0;
  totalPrice(product : any){
    return this.allPrice += (product.qty * product.price);
  }

  cartJson = [];

  parseToJsonCartItems(cartJSon = []) {
    // let cartItemsJSON = this.cartItems.map(el => {
    //   return JSON.parse(JSON.stringify(this.cartItems[el]));
    // })

    // let newarray = ca.map(item => {
    //   item = toJSON(item.replace(/"/g,"'"));
    //     return JSON.parse(item);
    //   });
    // console.log(this.cartItems);

    let newCartItems = this.cartItems.map(el => {
      // console.log(el);
      let cartItemJSON = JSON.parse(JSON.stringify(el));
      console.log(cartItemJSON);
      return cartJSon = cartItemJSON ;
    })

    // if (Array.isArray(arr)) {
    //   console.log("array");
    // } else if (typeof arr == 'string') console.log ('string');
    // else if (arr != null && typeof arr == 'object') console.log ('object');
    // else console.log ('other');
  }
}
