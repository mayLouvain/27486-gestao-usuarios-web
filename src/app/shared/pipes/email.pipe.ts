import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'emailFormatado' })
export class EmailFormatadoPipe implements PipeTransform {
  transform(valor: string | null | undefined): string {
    if (!valor) return '';
    return valor.toLowerCase();
  }
}
