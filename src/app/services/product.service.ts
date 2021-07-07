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

  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]> (this.productsUrl)
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
  deleteHero (product: Product | number): Observable<Product> {
    const id = typeof product === 'number' ? product : product.id;
    const url = `${this.productsUrl}/${id}`;

    return this.http.delete<Product>(url, this.httpOptions)
    // .pipe(
    //   tap(_ => this.log(`deleted hero id=${id}`)),
    //   catchError(this.handleError<Hero>('deleteHero'))
    // );
  }

}
