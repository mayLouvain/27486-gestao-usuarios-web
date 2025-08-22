import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { ValidacaoConfig } from '../models/form-base.model';

@Component({
  selector: 'app-validacao-base',
  templateUrl: './validacao-base.component.html',
  styleUrls: ['./validacao-base.component.scss']
})
export class ValidacaoBaseComponent {
  @Input() campoForm!: AbstractControl | null;
  @Input() idCampo!: string;
  @Input() mensagens: ValidacaoConfig[] = [];

  private mensagensPadrao: { [key: string]: (err?: any) => string } = {
    required: () => 'Campo obrigatório',
    email: () => 'Formato de e-mail inválido',
  };

  get mostrarErros(): boolean {
    return !!this.campoForm && this.campoForm.invalid && (this.campoForm.dirty || this.campoForm.touched);
  }

  get erros(): string[] {
    if (!this.campoForm || !this.campoForm.errors) return [];

    return Object.keys(this.campoForm.errors).map((errorKey) => {
      const customMsg = this.mensagens.find(v => v.tipo === errorKey)?.mensagens;
      if (customMsg) return customMsg;

      const defaultMsgFn = this.mensagensPadrao[errorKey];
      return defaultMsgFn
        ? defaultMsgFn(this.campoForm?.errors?.[errorKey] ?? {})
        : `Erro: ${errorKey}`;
    });
  }
}
