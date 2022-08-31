import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss'],
})
export class PageListOrdersComponent implements OnInit {
  public myTitle: string;

  constructor(private ordersService: OrdersService) {
    this.myTitle = 'List of orders';

    this.ordersService.collection$.subscribe((data) => console.log(data));
  }

  ngOnInit(): void {}

  public changeTitle(): void {
    this.myTitle = 'le titre a changé';
  }
}
