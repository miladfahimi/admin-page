////////////////////////////////////////////////////
//MODULES
import { Component, OnInit } from '@angular/core';

////////////////////////////////////////////////////
//SERVICES
import { AppService } from '../../app.service';

////////////////////////////////////////////////////
//MODELS
import { MenuItems } from '../../shared/menuitems.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  host: {
    class: 'sidebar'
  },
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  menuItems: MenuItems[]=[
    new MenuItems('home','#lnr-home','home'),
    new MenuItems('home','#lnr-upload','categories'),
    new MenuItems('home','#lnr-gift','products'),
    new MenuItems('home','#lnr-chart-bars','chart'),
    new MenuItems('home','#lnr-user','users'),
    new MenuItems('home','#lnr-cog','setting'),
  ]
  constructor(private appService: AppService) { }

  ngOnInit() {
  }

  ////////////////////////////////////////////////////
  //METHODES


}
