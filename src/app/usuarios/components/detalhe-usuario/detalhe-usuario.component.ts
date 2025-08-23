import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  AcaoFormConfig,
  CampoFormDetalheConfig,
} from '../../../shared/models/form-base.model';

@Component({
  selector: 'app-detalhe-usuario',
  templateUrl: './detalhe-usuario.component.html',
  styleUrls: [
    './detalhe-usuario.component.scss',
    '../../../shared/usuarios.component.scss',
  ],
})
export class DetalheUsuarioComponent implements OnInit {
  @Input() dados: any;

  @Output() fecharEvento = new EventEmitter<void>();

  campos: CampoFormDetalheConfig[] = [];
  acoesFormulario: AcaoFormConfig[] = [];

  ngOnInit(): void {
    this.preencherFormConfig();
    this.preencherValorFormulario();
  }

  preencherFormConfig() {
    this.acoesFormulario = [
      {
        nome: 'Fechar',
        tipo: 'button',
        cor: 'warn',
        callback: () => this.fechar(),
      },
    ];
    this.campos = [
      {
        nome: 'Nome',
        id: 'nome',
        pipe: 'nomeFormatado',
        cols: 3,
        ariaNome: 'Nome do usuário',
      },
      {
        nome: 'E-mail',
        id: 'email',
        pipe: 'formatEmail',
        cols: 3,
        ariaNome: 'Email do usuário',
      },
      {
        nome: 'Status',
        id: 'status',
        pipe: 'statusFormat',
        cols: 3,
        ariaNome: 'Status do usuário',
      },
    ];
  }

  preencherValorFormulario() {
    this.campos.forEach((campo) => {
      campo.valor = this.dados[campo.id];
    });
  }

  fechar() {
    this.fecharEvento.emit();
  }
}
