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
    new MenuItems('categories','#lnr-upload','categories'),
    new MenuItems('products','#lnr-gift','products'),
    new MenuItems('chart','#lnr-chart-bars','chart'),
    new MenuItems('users','#lnr-user','users'),
    new MenuItems('setting','#lnr-cog','setting'),
  ]
  constructor(private appService: AppService) { }

  ngOnInit() {
  }

  ////////////////////////////////////////////////////
  //METHODES
  onClick(name){
    this.appService.onUpdateTitle(name);
  }

}
