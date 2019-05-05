import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialNavigatorRoutingModule } from './material-navigator-routing.module';
import { NavigatorComponent } from './navigator/navigator.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatGridListModule, MatCardModule, MatMenuModule, MatTreeModule } from '@angular/material';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TreeComponent } from './tree/tree.component';

@NgModule({
  declarations: [NavigatorComponent, HomeComponent, DashboardComponent, TreeComponent],
  imports: [
    CommonModule,
    MaterialNavigatorRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTreeModule
  ]
})
export class MaterialNavigatorModule { }
