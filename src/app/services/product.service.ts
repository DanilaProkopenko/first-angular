import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Product } from '../product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productsUrl = 'api/products';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient
  ) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl)
  }

  getProduct(id: number): Observable<Product> {
    const url = `${this.productsUrl}/${id}`;
    // return this.http.get<Hero>(url).pipe(
    //   tap(_ => this.log(`fetched hero id=${id}`)),
    //   catchError(this.handleError<Hero>(`getHero id=${id}`))
    // );
    return this.http.get<Product>(url)
  }



  /** DELETE: delete the hero from the server */
  deleteHero(product: Product | number): Observable<Product> {
    const id = typeof product === 'number' ? product : product.id;
    const url = `${this.productsUrl}/${id}`;

    return this.http.delete<Product>(url, this.httpOptions)
    // .pipe(
    //   tap(_ => this.log(`deleted hero id=${id}`)),
    //   catchError(this.handleError<Hero>('deleteHero'))
    // );
  }

  plusQty(product: any) {
    product.qty++;
    // product.totalPrice += product.price;
    product.totalPrice = product.price * product.qty;

    console.log(product)
  }

  minusQty(product: any) {
    let count = product.qty--;

    if ((count < 2) && (count = 1)) {
      product.qty = 1;
      product.totalPrice = product.price;
    } else {
      product.totalPrice = product.price * product.qty;

      // product.totalPrice -= product.price;
    }

    console.log(product)
  }

}
