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
import { WishlistItemModalComponent } from './components/wishlist/wishlist-item/wishlist-item-modal/wishlist-item-modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { ProductItemModalComponent } from './components/products-list/product-item-modal/product-item-modal.component';


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
    WishlistItemModalComponent,
    ProductItemModalComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [CartService, WishlistService, { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: false } }],
  bootstrap: [AppComponent]
})
export class AppModule { }
