import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersComponent } from '../pages/orders/orders.component';
import { ItemsComponent } from '../pages/items/items.component';
import { SuppliersComponent } from '../pages/suppliers/suppliers.component';
import { UsersComponent } from '../pages/users/users.component';

const routes: Routes = [
  { path: '', component: OrdersComponent},
  { path: 'Orders', component: OrdersComponent},
  { path: 'Items', component: ItemsComponent},
  { path: 'Suppliers', component: SuppliersComponent},
  //{ path: 'Users', component: UsersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }