import { Component, OnInit } from '@angular/core';
import { Orderline } from '../orderline.class';
import { OrderlineService } from '../orderline.service';

@Component({
  selector: 'app-orderline-list',
  templateUrl: './orderline-list.component.html',
  styleUrls: ['./orderline-list.component.css']
})
export class OrderlineListComponent implements OnInit {

  orderlines: Orderline[] = [];
  constructor(
    private olsvc: OrderlineService
  ) { }

  ngOnInit(): void {
    this.olsvc.list().subscribe({
      next: (res) => {
        this.orderlines = res;
        console.debug("Orderlines", res);
      },
      error: (err) => {
        console.error(err);
      }  
    });
  }
}
