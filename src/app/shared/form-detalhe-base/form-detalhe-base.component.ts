import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CampoFormDetalheConfig } from '../models/form-base.model';

@Component({
  selector: 'app-form-detalhe-base',
  templateUrl: './form-detalhe-base.component.html',
  styleUrl: './form-detalhe-base.component.scss',
})
export class FormDetalheBaseComponent {
  @Input() objetoDetalhe: any;

  @Input() campos: CampoFormDetalheConfig[] = [];

  @Output() fecharEvento = new EventEmitter<void>();

  gridCols = 3;

  getValorFormatado(campo: CampoFormDetalheConfig): any {
    if (!campo.pipe) return campo.valor;

    switch (campo.pipe) {
      case 'nomeFormatado':
        return campo.valor
          ? campo.valor.replace(/\b\w/g, (valor: string) => valor.toUpperCase())
          : campo.valor;
      case 'email':
        return campo.valor?.toLowerCase();
      default:
        return campo.valor;
    }
  }

  fechar() {
    this.fecharEvento.emit();
  }
}
