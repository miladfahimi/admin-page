////////////////////////////////////////////////////
//MODULES
import { EventEmitter, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router, ActivatedRoute } from "@angular/router";
import { Subject } from "rxjs/Subject";
import { BehaviorSubject } from "rxjs/BehaviorSubject";

////////////////////////////////////////////////////
//SERVICES


////////////////////////////////////////////////////
//MODELS
import { MenuItems } from './shared/menuitems.model';
import { SubMenuItems } from './shared/submenuitems.model';

@Injectable()
export class AppService {

  ////////////////////////////////////////////////////
  //OBSERVABLES
  subMenuItems = new BehaviorSubject<SubMenuItems[]>(undefined);

  ////////////////////////////////////////////////////
  //VARIABLES
  menuItems: MenuItems[] = [
    new MenuItems('home', '#lnr-home', 'home', [new SubMenuItems('Add', '#lnr-plus-circle', 'Add'),
    new SubMenuItems('remove', '#lnr-circle-minus', 'remove'), new SubMenuItems('Edit', '#lnr-menu-circle', 'Edit'), new SubMenuItems('help', '#lnr-question-circle', 'help')]),
    new MenuItems('categories', '#lnr-upload', 'categories', [new SubMenuItems('Add', '#lnr-plus-circle', 'Add'),
    new SubMenuItems('remove', '#lnr-circle-minus', 'remove'), new SubMenuItems('Edit', '#lnr-menu-circle', 'Edit'), new SubMenuItems('help', '#lnr-question-circle', 'help')]),
    new MenuItems('products', '#lnr-gift', 'products', [new SubMenuItems('Add', '#lnr-plus-circle', 'Add'),
    new SubMenuItems('remove', '#lnr-circle-minus', 'remove'), new SubMenuItems('Edit', '#lnr-menu-circle', 'Edit'), new SubMenuItems('help', '#lnr-question-circle', 'help')]),
    new MenuItems('chart', '#lnr-chart-bars', 'chart', [new SubMenuItems('Add', '#lnr-plus-circle', 'Add'),
    new SubMenuItems('remove', '#lnr-circle-minus', 'remove'),new SubMenuItems('Edit', '#lnr-menu-circle', 'Edit'),new SubMenuItems('help', '#lnr-question-circle', 'help')]),
    new MenuItems('users', '#lnr-user', 'users', [new SubMenuItems('Add', '#lnr-plus-circle', 'Add'),
    new SubMenuItems('remove', '#lnr-circle-minus', 'remove'),new SubMenuItems('Edit', '#lnr-menu-circle', 'Edit'),new SubMenuItems('help', '#lnr-question-circle', 'help')]),
    new MenuItems('setting', '#lnr-cog', 'setting', [new SubMenuItems('Add', '#lnr-plus-circle', 'Add'),
    new SubMenuItems('remove', '#lnr-circle-minus', 'remove'),new SubMenuItems('Edit', '#lnr-menu-circle', 'Edit'),new SubMenuItems('help', '#lnr-question-circle', 'help')]),
  ]
  title = new EventEmitter<string>();


  ////////////////////////////////////////////////////
  //CYCLE HOOKS
  constructor(private http: HttpClient,
    private router: Router) {
    this.onCloseSubSidebar();
  }

  ////////////////////////////////////////////////////
  //METHODES
  onUpdateTitle(title: string) {
    this.title.emit(title);
  }

  onGetMenuItem() {
    return this.menuItems;
  }

  onGetSubMenuItem(submenu) {
    for (var i = 0; i < this.menuItems.length; i++) {
      if (this.menuItems[i].name == submenu) {
        var selectedItem = i;
      }
    }
    this.subMenuItems.next(this.menuItems[selectedItem].subMenu);
  }
  onCloseSubSidebar() {
    this.router.navigate([{ outlets: { expandmenu: null } }]);
  }
}
