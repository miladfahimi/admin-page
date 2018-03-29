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
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { ProductComponent } from './product/product.component';
import { ChartComponent } from './chart/chart.component';


const appRoutes: Routes = [
  { path: 'home', component: HomeComponent, outlet: 'expandmenu' },
  { path: 'sidebar', component: SubsidebarComponent, outlet: 'expandmenu' },
  { path: 'content', component: ContentComponent },
  { path: '', redirectTo: '/content', pathMatch: 'full' },
  { path: 'user', component: UserComponent, outlet: 'expandmenu' },
  { path: 'product', component: ProductComponent, outlet: 'expandmenu' },
  { path: 'chart', component: ChartComponent, outlet: 'expandmenu' },
  { path: 'close', component: ChartComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SidebarComponent,
    SubsidebarComponent,
    ContentsComponent,
    ContentComponent,
    NavComponent,
    HomeComponent,
    UserComponent,
    ProductComponent,
    ChartComponent
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule,
    RouterModule.forRoot(appRoutes)],
  providers: [
    AppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
