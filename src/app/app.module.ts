import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MainRouter } from './app.routes';

import { AppComponent } from './app.component';

import { HttpModule } from '@angular/http';
import { ActivitiesComponent } from './activities/activities.component';
import { WebApiService } from '../app/shared/services/web-api.service';
import { ActivitiesDetailsComponent } from './activities-details/activities-details.component'


@NgModule({
	declarations: [
		AppComponent,
		ActivitiesComponent,
		ActivitiesDetailsComponent,
	],
	imports: [
		RouterModule,
		BrowserModule,
		FormsModule,
		HttpModule,
		MainRouter
	],
	providers: [
		WebApiService,
		

	],
	bootstrap: [AppComponent]
})
export class AppModule { }
