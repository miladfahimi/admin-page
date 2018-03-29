import { Component, OnInit } from '@angular/core';

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

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.appService.bg1.subscribe((data: string) =>{
      this.newColor = data;
      console.log(data);
    });
    this.appService.onUpdateTitle('users');
  }



}
