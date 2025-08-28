import { FormGroup } from '@angular/forms';

export enum Status {
  ATIVO = 'ATIVO',
  INATIVO = 'INATIVO'
}

export type TipoCampo =
  | 'text'
  | 'number'
  | 'email'
  | 'password'
  | 'textarea'
  | 'select'
  | 'checkbox'
  | 'date'
  | 'table';

export interface ItensOpcoes {
  valor: any;
  nome: string;
}

export interface CampoBaseConfig {
  id: string;
  nome: string;
  valor?: any;
  pipe?: string;
  cols?: number;
  ariaNome: string;
}

export interface CampoFormCadastroConfig extends CampoBaseConfig {
  tipo: TipoCampo;
  obrigatorio: boolean;
  fullWidthMobile: boolean;
  opcoes?: ItensOpcoes[];
  validacoes?: ValidacaoConfig[];
  mapaValores?: Status[];
}

export interface CampoFormDetalheConfig extends CampoBaseConfig {}

export interface ValidacaoConfig {
  tipo: string;
  valor?: any;
  mensagens?: string;
}

export interface AcaoFormConfig {
  nome: string;
  tipo?: 'button' | 'submit';
  cor?: 'primary' | 'accent' | 'warn';
  callback: (form?: any) => void;
  disabledConditionally?: boolean | ((form: FormGroup) => boolean);
}
