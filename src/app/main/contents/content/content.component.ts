import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";


//SERVICES
import { AppService } from '../../../app.service';

//MODELS
import { Deals } from '../../../shared/deals.model';
import { Tables } from '../../../shared/tables.model';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  host: {
    class: 'content'
  },
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  rowNumber: number[];
  rows: number[] = [1, 2];
  deals: Deals[] = [
    new Deals('product1', 2, '#lnr-car'),
    new Deals('product2', 1, '#lnr-heart-pulse'),
    new Deals('product3', 3, '#lnr-diamond'),
    new Deals('product4', 4, '#lnr-screen'),
    new Deals('product5', 2, '#lnr-bicycle'),
    new Deals('product6', 1, '#lnr-leaf'),
    new Deals('product7', 3, '#lnr-printer'),
    new Deals('product8', 4, '#lnr-shirt'),
  ];
  tables: Tables[] = [
    new Tables('product2', 'blue', 39, 'unisex, freesize', './assets/images/mysvg.svg#sunny'),
    new Tables('product1', 'green', 42, 'unisex, freesize', './assets/images/chart1.png'),
  ]

  constructor(private appService: AppService,
    private http: HttpClient) {
    this.rowNumber = [];
    for (let i = 0; i < this.deals.length / 2; i++) {
      this.rowNumber.push(i);
    }
  }

  ngOnInit() {
    this.appService.onUpdateTitle('home');
    // this.onGetData();
  }

  // onGetData() {
  //   try {
  //     setTimeout(() => {
  //       this.http
  //         .get("http://192.168.0.102:3100/bookingapp")
  //         .subscribe((data: Tables[]) => {
  //           if (data.length > 0) {
  //             for (var i = 0; i < 2; i++) {
  //               this.tables[i] = data[i];
  //             }
  //           } else {
  //             throw ("No data comes from server!");
  //           }
  //         });
  //     }, 500);
  //   }
  //   catch (e) {
  //     console.log("error : " + e);
  //   }
  //   finally {
  //     console.log("request sent!");
  //   }
  // }

  getCurrentDeals(currentIndex) {
    let item = [];
    let firstIndex = currentIndex * 2;
    for (let i = 0; i < 2; i++) {
      let nextIndex = firstIndex + i;
      if (this.deals[nextIndex]) {
        item.push(this.deals[nextIndex]);
      }
    }
    return item;
  }
}
