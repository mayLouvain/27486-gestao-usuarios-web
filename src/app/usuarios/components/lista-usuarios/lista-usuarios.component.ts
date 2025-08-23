import { DetalheLinhaAcao } from './../../../shared/models/tabela.model';
import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { UsuarioService } from '../../services/usuarios.service';
import { BotaoAcao } from '../../../shared/models/tabela.model';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ModalBaseComponent } from '../../../shared/modal-base/modal-base.component';
import { DetalheUsuarioComponent } from '../detalhe-usuario/detalhe-usuario.component';
import { ModalBaseConfig } from '../../../shared/models/modal-base.model';
import { Router } from '@angular/router';
import { ModalConfirmacaoBaseComponent } from '../../../shared/modal-confirmacao-base/modal-confirmacao-base.component';
import { Status } from '../../../shared/models/form-base.model';
import { MensagemService } from '../../../shared/service/mensagem.service';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: [
    './lista-usuarios.component.scss',
    '../../../shared/usuarios.component.scss',
  ],
})
export class ListaUsuariosComponent implements OnInit {
  usuarios: Usuario[] = [];
  colunas = ['nome', 'email', 'status'];
  detalheLinhaAcao: DetalheLinhaAcao = {};
  acoesBotoes: BotaoAcao[] = [];

  constructor(
    private dialog: MatDialog,
    private mensagemService: MensagemService,
    private router: Router,
    private usuarioService: UsuarioService,
  ) {}

  ngOnInit() {
    console.log('ngOnInit');
    this.usuarios = [];
    this.preencherAcoesConfigTabela();
    this.listarUsuarios();
  }

  preencherAcoesConfigTabela() {
    this.detalheLinhaAcao = {
      callback: (usuario: any) => this.abrirModalDetalhe(usuario),
    };

    this.acoesBotoes = [
      {
        nomeBotao: 'Editar Usuário',
        iconeBotao: 'edit',
        callback: (usuario: any) => this.abrirTelaEdicao(usuario),
        ariaNome: 'Alterar usuário',
      },
      {
        nomeBotao: 'Excluir Usuário',
        iconeBotao: 'delete',
        callback: (usuario: any) => this.abrirModalExclusao(usuario),
        ariaNome: 'Excluir usuário',
      },
    ];
  }

  listarUsuarios() {
    this.usuarios = [];
    this.usuarioService.listar().subscribe((data) => {
      this.usuarios = data;
    });
  }

  abrirTelaEdicao(usuario: Usuario): void {
    this.router.navigate(['usuarios/editar', usuario.id]);
  }

  abrirModalDetalhe(usuario: any) {
    const componentDetalhe: ModalBaseConfig = {
      titulo: 'Detalhar Usuário',
      componente: DetalheUsuarioComponent,
      dados: usuario,
    };

    this.abrirModalBase(componentDetalhe);
  }

  abrirModalBase(
    component: ModalBaseConfig,
  ): MatDialogRef<ModalBaseComponent, any> {
    const dialogRef = this.dialog.open(ModalBaseComponent, {
      width: '600px',
      data: component,
    });

    return dialogRef;
  }

  abrirModalExclusao(usuario: Usuario) {
    var dialogExclusao = this.dialog.open(ModalConfirmacaoBaseComponent, {
      width: '400px',
      data: {
        titulo: 'Excluir Usuário',
        mensagem: 'Tem certeza que deseja excluir este item?',
        textoConfirmar: 'Confirmar',
        textoCancelar: 'Não',
      },
    });

    dialogExclusao.afterClosed().subscribe((confirmado) => {
      if (confirmado) {
        this.excluir(usuario);
      }
    });
  }

  excluir(usuario: Usuario) {
    this.usuarioService.excluir(usuario.id).subscribe((retorno) => {
      this.mensagemService.apresentarMensagemSucesso(
        'Usuário excluído com sucesso!',
      );
      this.listarUsuarios();
    });
  }

  getClasseStatus(status: Status): string {
    const classes: Record<Status, string> = {
      [Status.ATIVO]: 'status-ativo',
      [Status.INATIVO]: 'status-inativo',
    };
    return classes[status];
  }

  getStatusLabel(status: Status): string {
    const statusTela: Record<Status, string> = {
      [Status.ATIVO]: 'Ativo',
      [Status.INATIVO]: 'Inativo',
    };
    return statusTela[status];
  }

  getCorStatus(status: Status): 'primary' | 'warn' {
    const statusColors: Record<Status, 'primary' | 'warn'> = {
      [Status.ATIVO]: 'primary',
      [Status.INATIVO]: 'warn',
    };
    return statusColors[status];
  }
}
