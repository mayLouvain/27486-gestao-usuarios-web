import {
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
  PipeTransform,
} from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { EmailFormatadoPipe } from '../pipes/email.pipe';
import { NomeFormatadoPipe } from '../pipes/nome.pipe';
import {
  AcaoFormConfig,
  CampoFormCadastroConfig,
} from '../models/form-base.model';

@Component({
  selector: 'app-form-cadastro-base',
  templateUrl: './form-cadastro-base.component.html',
  styleUrl: './form-cadastro-base.component.scss',
})
export class FormCadastroBaseComponent implements OnInit {

  @Input() camposForm: CampoFormCadastroConfig[] = [];
  @Input() acoesForm: AcaoFormConfig[] = [];

  isMobile = false;
  gridCols = 3;

  form!: FormGroup;

  pipeMap: { [key: string]: PipeTransform } = {
    nomeFormatado: new NomeFormatadoPipe(),
    emailFormatado: new EmailFormatadoPipe(),
  };

  constructor(
    private formBuilder: FormBuilder,
    private breakpointObserver: BreakpointObserver,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit() {
    this.preencherFormulario();
    this.calcularGridMobile();
  }

  preencherFormulario() {
    const grupoForm: any = {};

    this.camposForm.forEach((campoForm) => {
      const validacoes: Validators[] = [];

      (campoForm.validacoes || []).forEach((validacao) => {
        switch (validacao.tipo) {
          case 'required':
            validacoes.push(Validators.required);
            break;
          case 'email':
            validacoes.push(Validators.email);
            break;
        }
      });

      grupoForm[campoForm.id] = [campoForm.valor, validacoes];
    });

    this.form = this.formBuilder.group(grupoForm);

    this.cdr.detectChanges();
  }

  tranformarCampoComPipe(campo: any, valor: any): any {
    if (!campo.pipe || valor == null) return valor;
    const pipe = this.pipeMap[campo.pipe];
    return pipe ? pipe.transform(valor) : valor;
  }

  calcularColpan(campo: any): number {
    return this.isMobile && campo.fullWidthMobile ? this.gridCols : campo.cols;
  }

  calcularGridMobile() {
    this.breakpointObserver
      .observe([Breakpoints.Handset, Breakpoints.Tablet, Breakpoints.Web])
      .subscribe((result) => {
        if (result.breakpoints[Breakpoints.Handset]) {
          this.gridCols = 1;
          this.isMobile = true;
        } else if (result.breakpoints[Breakpoints.Tablet]) {
          this.gridCols = 2;
          this.isMobile = false;
        } else {
          this.gridCols = 3;
          this.isMobile = false;
        }
      });
  }

  isDisabled(botaoAcao: AcaoFormConfig): unknown {
    if (typeof botaoAcao.disabledConditionally === 'boolean') {
      return botaoAcao.disabledConditionally;
    }
    if (typeof botaoAcao.disabledConditionally === 'function') {
      return botaoAcao.disabledConditionally(this.form);
    }
    return false;
  }

  salvar() {

  }

  executarAcao(acao: AcaoFormConfig) {
    if (acao.callback) {
      acao.callback(this.form);
    }
  }

}
