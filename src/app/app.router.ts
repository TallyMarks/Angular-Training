import { Routes, RouterModule } from '@angular/router'
import { ModuleWithProviders } from '@angular/core';
import {BooksComponent} from '../app/books/books.component';
import {NewComponent } from '../app/new/new.component';
import { Injectable } from '@angular/core'


const AppRoutes: Routes = [
    
    { path: '', redirectTo:'books', pathMatch:'full' },
    { path: 'books', component: BooksComponent },
    { path: 'book/details/:id', component: NewComponent },
]

export const AppRouter:ModuleWithProviders = RouterModule.forRoot(AppRoutes);