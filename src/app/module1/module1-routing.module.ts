import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Module1Component } from './module1.component';
import { Component2Component } from './component2/component2.component';

const routes: Routes = [
  {path:'module1component',component:Module1Component},
  {path:'module1component2',component:Component2Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module1RoutingModule { }
