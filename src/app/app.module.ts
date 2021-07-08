import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductItemComponent } from './components/products-list/product-item/product-item.component';
import { CartComponent } from './components/cart/cart.component';
import { CartItemComponent } from './components/cart/cart-item/cart-item.component';
import { InMemoryDataService } from './services/in-memory-data.service';
import { CartService } from './services/cart.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { WishlistItemComponent } from './components/wishlist/wishlist-item/wishlist-item.component';
import { WishlistService } from './services/wishlist.service';
import { MiniWishlistComponent } from './components/wishlist/mini-wishlist/mini-wishlist.component';


@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductsListComponent,
    ProductItemComponent,
    CartComponent,
    CartItemComponent,
    WishlistComponent,
    WishlistItemComponent,
    MiniWishlistComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {dataEncapsulation: false}
    )
  ],
  providers: [CartService, WishlistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
