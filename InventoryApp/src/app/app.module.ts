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
import { SupplierFormComponent } from './components/suppliers/supplier-form/supplier-form.component';
import { SuppliersTableComponent } from './components/suppliers/suppliers-table/suppliers-table.component';
import { ImagesTableComponent } from './components/images/images-table/images-table/images-table.component';
import { ImageFormComponent } from './components/images/image-form/image-form/image-form.component';
import { UserFormComponent } from './components/users/user-form/user-form/user-form.component';
import { UsersTableComponent } from './components/users/users-table/users-table/users-table.component';
import { SuppliersComponent } from './pages/suppliers/suppliers.component';
import { UsersComponent } from './pages/users/users/users.component';
import { ImagesComponent } from './pages/images/images/images.component';
import { MatSortModule } from '@angular/material';

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
    ItemsComponent,
    SupplierFormComponent,
    SuppliersTableComponent,
    ImagesTableComponent,
    ImageFormComponent,
    UserFormComponent,
    UsersTableComponent,
    SuppliersComponent,
    UsersComponent,
    ImagesComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    OrderFormComponent,
    ItemFormComponent,
    SupplierFormComponent,
    ConfirmComponent
  ]
})
export class AppModule { }
