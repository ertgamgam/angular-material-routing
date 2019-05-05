import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavigatorComponent } from './navigator/navigator.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TreeComponent } from './tree/tree.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'tree',component:TreeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaterialNavigatorRoutingModule { }
