import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'nomeFormatado' })
export class NomeFormatadoPipe implements PipeTransform {
  transform(valor: string | null | undefined): string {
    if (!valor) return '';
    return valor
      .toLowerCase()
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }
}
