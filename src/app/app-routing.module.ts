/**
 * * Title: app-routing.module.ts
 * Author: Larry Ohaka
 * Date: 7/3/21
 * Description: Navigation and Layout
 */


 import { NgModule } from '@angular/core';
 import { RouterModule, Routes } from '@angular/router';
 import { HomeComponent } from './home/home.component';
 import { AboutComponent } from './about/about.component';
 import { ServicesComponent } from './services/services.component';
 import { NotFoundComponent } from './not-found/not-found.component';

 const routes: Routes = [
   { path: '', component: HomeComponent },
   { path: 'about', component: AboutComponent },
   { path: 'services', component: ServicesComponent },
   { path: '**', component: NotFoundComponent },
 ];

 @NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule],
 })
 export class AppRoutingModule {}
