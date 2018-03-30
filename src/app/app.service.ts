////////////////////////////////////////////////////
//MODULES
import { EventEmitter, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router, ActivatedRoute } from "@angular/router";

////////////////////////////////////////////////////
//SERVICES


////////////////////////////////////////////////////
//MODELS
import { MenuItems } from './shared/menuitems.model';

@Injectable()
export class AppService {
  menuItems: MenuItems[]=[
    new MenuItems('home','#lnr-home','home'),
    new MenuItems('categories','#lnr-upload','categories'),
    new MenuItems('products','#lnr-gift','products'),
    new MenuItems('chart','#lnr-chart-bars','chart'),
    new MenuItems('users','#lnr-user','users'),
    new MenuItems('setting','#lnr-cog','setting'),
  ]
  title = new EventEmitter<string>();


  constructor(private http: HttpClient,
    private router: Router) {
  }

  ////////////////////////////////////////////////////
  //METHODES
  onUpdateTitle(title: string) {
    this.title.emit(title);
  }

  onGetMenuItem(){
    return this.menuItems;
  }

}
