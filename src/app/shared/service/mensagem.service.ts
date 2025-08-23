import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class MensagemService {
  constructor(private snackBar: MatSnackBar) {}

  private mostrarMensagem(
    mensagem: string,
    classe: string,
    tempo: number = 3000,
  ): void {
    const config: MatSnackBarConfig = {
      duration: tempo,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: [classe],
    };

    this.snackBar.open(mensagem, 'Fechar', config);
  }

  apresentarMensagemSucesso(mensagem: string): void {
    this.mostrarMensagem(mensagem, 'snackbar-success');
  }

  apresentarMensagemErro(mensagem: string): void {
    this.mostrarMensagem(mensagem, 'snackbar-error', 5000);
  }

  apresentarMensagemInfo(mensagem: string): void {
    this.mostrarMensagem(mensagem, 'snackbar-info');
  }

  apresentarMensagemAlerta(mensagem: string): void {
    this.mostrarMensagem(mensagem, 'snackbar-warning');
  }
}
