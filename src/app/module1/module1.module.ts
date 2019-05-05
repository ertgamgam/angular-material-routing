import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module1RoutingModule } from './module1-routing.module';
import { Module1Component } from './module1.component';
import { Component2Component } from './component2/component2.component';

@NgModule({
  declarations: [Module1Component, Component2Component],
  imports: [
    CommonModule,
    Module1RoutingModule
  ]
})
export class Module1Module { }
