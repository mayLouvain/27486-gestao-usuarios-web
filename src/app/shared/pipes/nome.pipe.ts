import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'nomeFormatado' })
export class NomeFormatadoPipe implements PipeTransform {
  transform(valor: string | null | undefined): string {
    if (!valor) return '';
    return valor
      .toLowerCase()
      .split(' ')
      .map((palavra) => palavra.charAt(0).toUpperCase() + palavra.slice(1))
      .join(' ');
  }
}
