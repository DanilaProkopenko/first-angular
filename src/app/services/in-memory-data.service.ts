import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Product } from '../product';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const products = [
      { id: 0, name: "phone 1", price: 100, description: "one 1one 1one 1one 1", qty: 2 },
      { id: 1, name: "phone 2", price: 200, description: "one 2one 2one 2one 2", qty: 2 },
      { id: 2, name: "phone 3", price: 300, description: "one 3one 3one 3one 3", qty: 2 },
      { id: 3, name: "phone 4", price: 400, description: "one 4one 4one 4one 4", qty: 2 },
      { id: 4, name: "phone 5", price: 500, description: "one 5one 5one 5one 5", qty: 2 }
    ];
    return {products}
  }

  constructor(
  ) { }

  genId(products: Product[]): number {
    return products.length > 0 ? Math.max(...products.map(product => product.id)) + 1 : 11;
  }

}
