////////////////////////////////////////////////////
//MODULES
import { Component, EventEmitter, OnInit, OnDestroy, Injectable } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/Subscription";


////////////////////////////////////////////////////
//SERVICES
import { AppService } from '../../../app.service';

////////////////////////////////////////////////////
//MODELS
import { SubMenuItems } from '../../../shared/subMenuItems.model';

@Component({
  selector: 'app-subsidebar',
  templateUrl: './subsidebar.component.html',
  host: {
    class: 'subsidebar'
  },
  styleUrls: ['./subsidebar.component.scss']
})
@Injectable()
export class SubsidebarComponent implements OnInit, OnDestroy {

  ////////////////////////////////////////////////////
  //VARIABLES
  subMenuItems: SubMenuItems[];
  subscription: Subscription;

  ////////////////////////////////////////////////////
  //CYCLE HOOKS
  constructor(private appService: AppService,
    private router: Router) {


  }

  ngOnInit() {
    this.subscription = this.appService.subMenuItems.subscribe(
      (data: SubMenuItems[]) => {
        this.subMenuItems = data;
      });
  }


  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  ////////////////////////////////////////////////////
  //METHODES
  onClose() {
    this.appService.onCloseSubSidebar();
  }

}
