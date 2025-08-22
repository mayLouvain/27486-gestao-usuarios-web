import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../core/material/material.module';
import { SharedModule } from '../shared/shared.module';
import { LayoutModule } from '@angular/cdk/layout';
import { UsuariosRoutingModule } from './usuarios-routing.module';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    SharedModule,
    LayoutModule,
    UsuariosRoutingModule
  ]
})
export class UsuariosModule { }
