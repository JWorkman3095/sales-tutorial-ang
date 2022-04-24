import { Component, OnInit } from '@angular/core';
import { Menu } from './menu.class';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menus: Menu[] = [
    new Menu("Login", "/employee-login"),
    new Menu("HOME", "/home"),
    new Menu("CUSTOMER", "/customer/list"),
    new Menu( "ORDER", "/order/list"),
    new Menu("ORDERLINE", "/orderline/list"),
    new Menu("ABOUT", "/about"),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
