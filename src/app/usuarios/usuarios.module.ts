import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroEdicaoUsuarioComponent } from './components/cadastro-edicao-usuario/cadastro-edicao-usuario.component';
import { DetalheUsuarioComponent } from './components/detalhe-usuario/detalhe-usuario.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../core/material/material.module';
import { ListaUsuariosComponent } from './components/lista-usuarios/lista-usuarios.component';
import { SharedModule } from '../shared/shared.module';
import { LayoutModule } from '@angular/cdk/layout';
import { UsuariosRoutingModule } from './usuarios-routing.module';

@NgModule({
  declarations: [
    ListaUsuariosComponent,
    CadastroEdicaoUsuarioComponent,
    DetalheUsuarioComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    SharedModule,
    LayoutModule,
    UsuariosRoutingModule,
  ],
})
export class UsuariosModule {}
