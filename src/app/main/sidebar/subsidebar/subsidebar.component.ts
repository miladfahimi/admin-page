import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

import { AppService } from '../../../app.service';

@Component({
  selector: 'app-subsidebar',
  templateUrl: './subsidebar.component.html',
  host: {
    class:'subsidebar'
   },
  styleUrls: ['./subsidebar.component.scss']
})
export class SubsidebarComponent implements OnInit {
  newColor:string;

  constructor(private appService: AppService,
              private router: Router) { }

  ngOnInit() {
  }

  onClose() {
    this.router.navigate([{ outlets: { expandmenu: null }}]);
  }

}
