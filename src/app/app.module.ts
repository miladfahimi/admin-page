import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";


import { AppComponent } from './app.component';
import { AppService } from "./app.service";
import { MainComponent } from './main/main.component';
import { SidebarComponent } from './main/sidebar/sidebar.component';
import { SubsidebarComponent } from './main/sidebar/subsidebar/subsidebar.component';
import { ContentsComponent } from './main/contents/contents.component';
import { ContentComponent } from './main/contents/content/content.component';
import { NavComponent } from './nav/nav.component';
import { MainService } from './main/main.service';


const appRoutes: Routes = [
  { path: 'sidebar', component: SubsidebarComponent, outlet: 'expandmenu' },
  { path: 'content', component: ContentComponent },
  { path: '', redirectTo: '/content', pathMatch: 'full' },
  { path: 'subsidebar', component: SubsidebarComponent, outlet: 'expandmenu' },
];


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SidebarComponent,
    SubsidebarComponent,
    ContentsComponent,
    ContentComponent,
    NavComponent
    ],
  imports: [BrowserModule, FormsModule, HttpClientModule,
    RouterModule.forRoot(appRoutes)],
  providers: [
    AppService,
    MainService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
