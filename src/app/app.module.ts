import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './compo/header/header.component';
import { CartComponent } from './compo/cart/cart.component';
import { ProductsComponent } from './compo/products/products.component';

// mat modules
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import {MatCardModule} from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';

// services
import { ApiService } from './service/api.service';
import { CartService } from './service/cart.service';
import { ViewProductComponent } from './compo/view-product/view-product.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CartComponent,
    ProductsComponent,
    ViewProductComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // mat modules
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatBadgeModule,
    MatCardModule
  ],
  providers: [
    ApiService,
    CartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
