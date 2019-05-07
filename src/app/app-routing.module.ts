import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Component1Component } from './component1/component1.component';

const routes: Routes = [
  {path:'component1',component:Component1Component},
  {path:'',redirectTo:'navigator',pathMatch:'full'},
  {path:'config',loadChildren:'../configuration/configuration.module#ConfigurationModule'},
  {path:'navigator',loadChildren:'../material-navigator/material-navigator.module#MaterialNavigatorModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
