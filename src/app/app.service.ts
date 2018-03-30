import { EventEmitter, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router, ActivatedRoute } from "@angular/router";


@Injectable()
export class AppService {
  title = new EventEmitter<string>();


  constructor(private http: HttpClient,
    private router: Router) {
  }


  onUpdateTitle(title: string) {
    this.title.emit(title);
  }

}
