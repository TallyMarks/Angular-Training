import { Routes, RouterModule } from '@angular/router'
import { ModuleWithProviders } from '@angular/core';
import { BooksComponent } from '../app/books/books.component';
import { NewComponent } from '../app/new/new.component';

import { UserinfoComponent } from './userinfo/userinfo.component'
import { SingleuserinfoComponent } from './singleuserinfo/singleuserinfo.component'

const AppRoutes: Routes = [
    { path: 'userInfo', component: UserinfoComponent},
    { path: 'userinfo/:id', component: SingleuserinfoComponent},
    
    { path: 'books', component: BooksComponent },
    { path: 'book/details/:id', component: NewComponent },
]

export const AppRouter:ModuleWithProviders = RouterModule.forRoot(AppRoutes);