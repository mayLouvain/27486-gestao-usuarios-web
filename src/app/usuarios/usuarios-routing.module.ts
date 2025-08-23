import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaUsuariosComponent } from './components/lista-usuarios/lista-usuarios.component';
import { CadastroEdicaoUsuarioComponent } from './components/cadastro-edicao-usuario/cadastro-edicao-usuario.component';

const routes: Routes = [
  { path: '', redirectTo: 'listar', pathMatch: 'full' },
  { path: 'listar', component: ListaUsuariosComponent },
  { path: 'cadastrar', component: CadastroEdicaoUsuarioComponent },
  { path: 'editar/:id', component: CadastroEdicaoUsuarioComponent },
  { path: '**', redirectTo: 'listar' },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuariosRoutingModule {}
