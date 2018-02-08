import { AppRouter } from './app.router';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//import { FormsModule } from '@angular/forms';
//import { MainRouter } from './app.routes';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { BsDropdownModule } from 'ngx-bootstrap';
import { HttpModule } from '@angular/http';

import { ActivitiesComponent } from './activities/activities.component';
import { WebApiService } from '../app/shared/services/web-api.service';
import { ActivitiesDetailsComponent } from './activities-details/activities-details.component'

import { UserinfoComponent } from './userinfo/userinfo.component';
import { SingleuserinfoComponent } from './singleuserinfo/singleuserinfo.component';

import { HttpModule } from '@angular/http';
import { BooksComponent } from './books/books.component'
import { NewComponent } from './new/new.component';

@NgModule({
	declarations: [
		AppComponent,

    ActivitiesComponent,
		ActivitiesDetailsComponent,

    UserinfoComponent,
		SingleuserinfoComponent,

    BooksComponent,
		NewComponent,
  ],
	imports: [
		RouterModule,
		BrowserModule,
		FormsModule,
		HttpModule,

    //MainRouter

    ReactiveFormsModule,
		BsDropdownModule.forRoot(),
		AppRouter,

  ],
	providers: [
		WebApiService,
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
