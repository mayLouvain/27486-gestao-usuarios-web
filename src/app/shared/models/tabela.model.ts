import { TipoCampo } from "./form-base.model";

export type TipoPipe = 'nomeFormatado' | 'emailFormatado' | 'none';

export interface BotaoAcao {
  nomeBotao: string;
  iconeBotao?: string;
  ariaNome: string;
  callback: (acaoBotao: any) => void;
}

export interface DetalheLinhaAcao {
  callback?: (acaoBotao: any) => void;
}

export interface ColunaTabela {
  id: string;
  nome: string;
  pipe?: TipoPipe;
}
