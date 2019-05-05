import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { Config1Component } from './config1/config1.component';
import { Config2Component } from './config2/config2.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {path:'',redirectTo:'config1',pathMatch:'full'},
      { path: 'config1', component: Config1Component },
      { path: 'config2', component: Config2Component }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfigurationRoutingModule { }
