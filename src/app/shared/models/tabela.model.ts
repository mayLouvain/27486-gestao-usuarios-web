export interface BotaoAcao {
  nomeBotao: string;
  iconeBotao?: string;
  ariaNome: string;
  callback: (acaoBotao: any) => void;
}


export interface DetalheLinhaAcao {
  callback?: (acaoBotao: any) => void;
}
