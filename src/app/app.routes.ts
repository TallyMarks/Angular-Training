import { Routes, RouterModule } from '@angular/router'
import { ModuleWithProviders } from '@angular/core';
import { Injectable } from '@angular/core';

import { ActivitiesDetailsComponent } from './activities-details/activities-details.component';
import { ActivitiesComponent } from './activities/activities.component';

const MainRoutes: Routes = [
    { path: '', redirectTo: 'activities', pathMatch: 'full' },
    { path: 'activities', component: ActivitiesComponent },
    { path: 'activity/details/:id', component: ActivitiesDetailsComponent },
    
];

export const MainRouter: ModuleWithProviders = RouterModule.forRoot(MainRoutes);