import { DetalheLinhaAcao } from './../models/tabela.model';
import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { BotaoAcao} from '../models/tabela.model';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-tabela-base',
  templateUrl: './tabela-base.component.html',
  styleUrl: './tabela-base.component.scss'
})
export class TabelaBaseComponent  implements OnInit, AfterViewInit {

  @Input() dados: any[] = [];
  @Input() colunas: any[] = [];
  @Input() acoesBotoes: BotaoAcao[] = [];
  @Input() detalheLinhaAcao: DetalheLinhaAcao | undefined;

  dataSource = new MatTableDataSource<any>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  isMobile$: Observable<boolean>;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.isMobile$ = this.breakpointObserver.observe([Breakpoints.Handset])
    .pipe(map((result: { matches: any; }) => result.matches));
  }

  ngOnInit(): void {
    this.dataSource.data = this.dados;
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnChanges(): void {
    this.dataSource.data = this.dados;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  get colunasTabelaTela(): string[] {
    return this.colunas.concat(this.acoesBotoes.length ? ['acoes'] : []);
  }
}

