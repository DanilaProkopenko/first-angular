import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Product } from '../product';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const products = [
      { id: 0, name: "phone 1", img: "https://img.mvideo.ru/Pdb/30052890b.jpg", price: 100, description: "one 1one 1one 1one 1", qty: 1 },
      { id: 1, name: "phone 2", img: "https://img.mvideo.ru/Pdb/30052890b.jpg", price: 200, description: "one 2one 2one 2one 2", qty: 1 },
      { id: 2, name: "phone 3", img: "https://img.mvideo.ru/Pdb/30052890b.jpg", price: 300, description: "one 3one 3one 3one 3", qty: 1 },
      { id: 3, name: "phone 4", img: "https://img.mvideo.ru/Pdb/30052890b.jpg", price: 400, description: "one 4one 4one 4one 4", qty: 1 },
      { id: 4, name: "phone 5", img: "https://img.mvideo.ru/Pdb/30052890b.jpg", price: 500, description: "one 5one 5one 5one 5", qty: 1 },
      { id: 5, name: "phone 6", img: "https://img.mvideo.ru/Pdb/30052890b.jpg", price: 700, description: "one 6one 6one 6one 6", qty: 1 },
      { id: 6, name: "phone 66", img: "https://img.mvideo.ru/Pdb/30052890b.jpg", price: 2612, description: "one66 one 66one 66one 66", qty: 1 },
      { id: 7, name: "phone 7", img: "https://img.mvideo.ru/Pdb/30052890b.jpg", price: 123, description: "one 7one 7one 5one 7", qty: 1 },
      { id: 8, name: "phone 8", img: "https://img.mvideo.ru/Pdb/30052890b.jpg", price: 356, description: "one 5one 5one 5one 5", qty: 1 },
    ];
    return {products}
  }

  constructor(
  ) { }

  genId(products: Product[]): number {
    return products.length > 0 ? Math.max(...products.map(product => product.id)) + 1 : 11;
  }

}
