import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './modules/material-module';
import { AppRoutingModule } from './modules/app-routing.module';

import { AppComponent } from './app.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { ItemsComponent } from './pages/items/items.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { OrderFormComponent } from './components/orders/order-form/order-form.component';
import { OrdersTableComponent } from './components/orders/orders-table/orders-table.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ConfirmComponent } from './components/confirm/confirm.component';
import { ItemsTableComponent } from './components/items/items-table/items-table.component';
import { ItemFormComponent } from './components/items/item-form/item-form.component';

@NgModule({
  declarations: [
    AppComponent,
    OrdersComponent,
    SidenavComponent,
    OrderFormComponent,
    OrdersTableComponent,
    ConfirmComponent,
    ItemsTableComponent,
    ItemFormComponent,
    ItemsComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    OrderFormComponent,
    ItemFormComponent,
    ConfirmComponent
  ]
})
export class AppModule { }
