import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { E404Component } from './e404/e404.component';
import { MenuComponent } from './menu/menu.component';
import { CustomerListComponent } from './sales/customer/customer-list/customer-list.component';
import { CustomerDetailComponent } from './sales/customer/customer-detail/customer-detail.component';
import { CustomerCreateComponent } from './sales/customer/customer-create/customer-create.component';
import { CustomerEditComponent } from './sales/customer/customer-edit/customer-edit.component';
import { OrderlineListComponent } from './sales/orderline/orderline-list/orderline-list.component';
import { OrderlineDetailComponent } from './sales/orderline/orderline-detail/orderline-detail.component';
import { OrderlineCreateComponent } from './sales/orderline/orderline-create/orderline-create.component';
import { OrderlineEditComponent } from './sales/orderline/orderline-edit/orderline-edit.component';
import { OrderListComponent } from './sales/order/order-list/order-list.component';
import { OrderDetailComponent } from './sales/order/order-detail/order-detail.component';
import { OrderCreateComponent } from './sales/order/order-create/order-create.component';
import { OrderEditComponent } from './sales/order/order-edit/order-edit.component';
import { BoolDisplayPipe } from './bool-display.pipe';
import { CustomerSearchPipe } from './sales/customer/customer-search.pipe';
import { EmployeeLoginComponent } from './sales/employee/employee-login/employee-login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    E404Component,
    MenuComponent,
    CustomerListComponent,
    CustomerDetailComponent,
    CustomerCreateComponent,
    CustomerEditComponent,
    OrderlineListComponent,
    OrderlineDetailComponent,
    OrderlineCreateComponent,
    OrderlineEditComponent,
    OrderListComponent,
    OrderDetailComponent,
    OrderCreateComponent,
    OrderEditComponent,
    BoolDisplayPipe,
    CustomerSearchPipe,
    EmployeeLoginComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
