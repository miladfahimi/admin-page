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
  menuItems: MenuItems[];
  constructor(private appService: AppService) { }

  ngOnInit() {
    this.menuItems = this.appService.onGetMenuItem();
  }

  ////////////////////////////////////////////////////
  //METHODES
  onClick(name){
    this.appService.onUpdateTitle(name);
    this.appService.onGetSubMenuItem(name);
  }
}
