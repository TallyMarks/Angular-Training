import { AppRouter } from './app.router';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { BsDropdownModule } from 'ngx-bootstrap';
import { HttpModule } from '@angular/http';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { SingleuserinfoComponent } from './singleuserinfo/singleuserinfo.component';

import { HttpModule } from '@angular/http';
import { BooksComponent } from './books/books.component'
import { NewComponent } from './new/new.component';

@NgModule({
	declarations: [
		AppComponent,

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

    ReactiveFormsModule,
		BsDropdownModule.forRoot(),
		AppRouter,
	],
	providers: [
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
