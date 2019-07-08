import { AppErrorHandler } from './common/app-error-handler';
import { HttpService } from './service/http.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReviewHeaderComponent } from './review-header/review-header.component';
import { WeekDaysManuComponent } from './week-days-manu/week-days-manu.component';
import { HomeScreenContentComponent } from './home-screen-content/home-screen-content.component';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    ReviewHeaderComponent,
    WeekDaysManuComponent,
    HomeScreenContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [
    HttpService,
    { provide: ErrorHandler, useClass: AppErrorHandler }],
  bootstrap: [AppComponent]
})
export class AppModule { }
