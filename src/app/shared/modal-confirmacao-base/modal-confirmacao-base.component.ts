import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ModalConfirmacaoConfig } from '../models/modal-confirmacao-base.model';

@Component({
  selector: 'app-modal-confirmacao-base',
  templateUrl: './modal-confirmacao-base.component.html',
  styleUrl: './modal-confirmacao-base.component.scss'
})
export class ModalConfirmacaoBaseComponent {
  constructor(
    public dialogRef: MatDialogRef<ModalConfirmacaoBaseComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ModalConfirmacaoConfig
  ) {}

  confirmar(): void {
    this.dialogRef.close(true);
  }

  cancelar(): void {
    this.dialogRef.close(false);
  }
}
