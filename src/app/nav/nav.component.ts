import { Component, OnInit } from '@angular/core';

import { AppService } from '../app.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  host: {
    class: 'nav'
  },
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  title: string = 'welcome!';
  constructor(private appService: AppService) {
    setInterval(() => {
      this.appService.title.subscribe((data) => {
        this.title = data;
      });
    }, 100);
  }

  ngOnInit() {
  }
}
