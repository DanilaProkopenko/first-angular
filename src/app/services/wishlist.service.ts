import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  wishlistItems = [] as any[];
  product = [] as any [];


  constructor() { }

  addToWishlist(product: any) {
    let productExist = false;

    // Можно сделать проверку по свойствам, допустим если выбраны товары разного цвета, то в список желаний добавяться оба товара, но если товар идентичный по всем свойствам, то не добавляется.
    // сделал проверку по имени, так как id при доавлении из корзины выдает undefined
    for(let i in this.wishlistItems){
      if(this.wishlistItems[i].name === product.name){
        productExist = true;
        break;
      }
    }

    if(!productExist){
      this.wishlistItems.push({
        id: product.id,
        name: product.name,
        img: product.img,
        totalPrice: product.totalPrice,
        price: product.price,
        description: product.description,
        qty: 1
      });
    }
  }

  getWishlistItems() {
    return this.wishlistItems;
  }

  delete(product:  any){
    this.wishlistItems.splice(this.wishlistItems.indexOf(product), 1);
  }
}
