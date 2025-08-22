import {
  Component,
  ComponentRef,
  EventEmitter,
  Inject,
  ViewChild,
  ViewContainerRef,
  OnInit,
} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ModalBaseConfig } from '../models/modal-base.model';

export interface ModalComponente {
  salvarEvento?: EventEmitter<any>;
  fecharEvento?: EventEmitter<void>;
  dados?: any;
}

@Component({
  selector: 'app-modal-base',
  templateUrl: './modal-base.component.html',
  styleUrl: './modal-base.component.scss',
})
export class ModalBaseComponent implements OnInit {

  @ViewChild('containerModalBase', { read: ViewContainerRef, static: true })

  container!: ViewContainerRef;
  referenciaComponente: ComponentRef<ModalComponente> | undefined;

  constructor(
    public dialogRef: MatDialogRef<ModalBaseComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: ModalBaseConfig,
  ) {}

  ngOnInit(): void {

    this.referenciaComponente = this.container.createComponent(this.data.componente);

    if (this.data.dados) {
      this.referenciaComponente.instance.dados = this.data.dados;
    }

    if (this.referenciaComponente.instance.salvarEvento) {
      this.referenciaComponente.instance.salvarEvento.subscribe((dados: any) => {
        this.dialogRef.close(dados);
      });
    }

    if (this.referenciaComponente.instance.fecharEvento) {
      this.referenciaComponente.instance.fecharEvento.subscribe(() => {
        this.dialogRef.close();
      });
    }
  }
}
