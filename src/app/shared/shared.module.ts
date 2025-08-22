import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../core/material/material.module';
import { NavegacaoComponent } from './navegacao/navegacao.component';
import { TabelaBaseComponent } from './tabela-base/tabela-base.component';
import { LayoutModule } from '@angular/cdk/layout';
import { FormCadastroBaseComponent } from './form-cadastro-base/form-cadastro-base.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ValidacaoBaseComponent } from './validacao-base/validacao-base.component';
import { EmailFormatadoPipe } from './pipes/email.pipe';
import { NomeFormatadoPipe } from './pipes/nome.pipe';
import { FormDetalheBaseComponent } from './form-detalhe-base/form-detalhe-base.component';
import { ModalBaseComponent } from './modal-base/modal-base.component';
import { ModalConfirmacaoBaseComponent } from './modal-confirmacao-base/modal-confirmacao-base.component';

@NgModule({
  declarations: [
    EmailFormatadoPipe,
    FormCadastroBaseComponent,
    FormDetalheBaseComponent,
    ModalBaseComponent,
    ModalConfirmacaoBaseComponent,
    NavegacaoComponent,
    NomeFormatadoPipe,
    TabelaBaseComponent,
    ValidacaoBaseComponent,
  ],
  imports: [
    MaterialModule,
    CommonModule,
    RouterModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    EmailFormatadoPipe,
    FormCadastroBaseComponent,
    FormDetalheBaseComponent,
    ModalBaseComponent,
    ModalConfirmacaoBaseComponent,
    NavegacaoComponent,
    NomeFormatadoPipe,
    TabelaBaseComponent,
    ValidacaoBaseComponent
  ]
})
export class SharedModule { }
