import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router'
import { ModuleWithProviders } from '@angular/core';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const AppRoutes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'home', component: HomeComponent },
]

export const AppRouter:ModuleWithProviders = RouterModule.forRoot(AppRoutes);