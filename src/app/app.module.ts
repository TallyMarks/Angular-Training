import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {AppRouter} from'./app.router'
import { Http, Response,HttpModule } from '@angular/http';
import { BooksComponent } from './books/books.component'
import { NewComponent } from './new/new.component';


@NgModule({
	declarations: [
		AppComponent,
		BooksComponent,
		NewComponent,
	],
	imports: [
		RouterModule,
		BrowserModule,
		FormsModule,
		HttpModule,
		AppRouter
	],
	providers: [BooksComponent
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
