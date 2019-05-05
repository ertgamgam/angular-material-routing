import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfigurationRoutingModule } from './configuration-routing.module';
import { MainComponent } from './main/main.component';
import { Config1Component } from './config1/config1.component';
import { Config2Component } from './config2/config2.component';

@NgModule({
  declarations: [MainComponent, Config1Component, Config2Component],
  imports: [
    CommonModule,
    ConfigurationRoutingModule
  ]
})
export class ConfigurationModule { }
