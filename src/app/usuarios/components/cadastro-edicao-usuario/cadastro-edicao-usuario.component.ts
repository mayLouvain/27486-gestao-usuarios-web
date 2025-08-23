import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {
  AcaoFormConfig,
  CampoFormCadastroConfig,
  Status,
} from '../../../shared/models/form-base.model';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../../services/usuarios.service';
import { Usuario } from '../../models/usuario.model';
import { MensagemService } from '../../../shared/service/mensagem.service';

@Component({
  selector: 'app-cadastro-edicao-usuario',
  templateUrl: './cadastro-edicao-usuario.component.html',
  styleUrls: [
    './cadastro-edicao-usuario.component.scss',
    '../../../shared/usuarios.component.scss',
  ],
})
export class CadastroEdicaoUsuarioComponent implements OnInit {
  form!: FormGroup;
  campos: CampoFormCadastroConfig[] = [];
  acoesFormulario: AcaoFormConfig[] = [];
  id: any;

  constructor(
    private mensagemService: MensagemService,
    private route: ActivatedRoute,
    private router: Router,
    private usuarioService: UsuarioService,
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.preecherConfiguracoesForm();

    if (this.id) {
      this.consultarUsuario(this.id);
    }
  }

  consultarUsuario(id: string) {
    this.usuarioService.consultar(id)?.subscribe((usuario) => {
      if (usuario) {
        this.preencherDadosFormulario(usuario);
      }
    });
  }

  preecherConfiguracoesForm() {
    this.acoesFormulario = [
      {
        nome: 'Voltar',
        tipo: 'button',
        cor: 'warn',
        disabledConditionally: () => false,
        callback: () => this.fechar(),
      },
      {
        nome: 'Salvar',
        tipo: 'submit',
        cor: 'primary',
        disabledConditionally: (form: FormGroup) => form.invalid,
        callback: (camposForm) => this.salvar(camposForm),
      },
    ];

    this.campos = [
      {
        id: 'nome',
        nome: 'Nome',
        tipo: 'text',
        cols: 3,
        pipe: 'nomeFormatado',
        fullWidthMobile: true,
        validacoes: [{ tipo: 'required' }],
        obrigatorio: true,
        ariaNome: 'Nome do usuário',
      },
      {
        id: 'email',
        nome: 'E-mail',
        tipo: 'text',
        cols: 3,
        pipe: 'emailFormatado',
        fullWidthMobile: true,
        validacoes: [
          { tipo: 'required' },
          { tipo: 'email', mensagens: 'Email inválido' },
        ],
        obrigatorio: true,
        ariaNome: 'Email do usuário',
      },
      {
        id: 'status',
        nome: 'Ativo',
        tipo: 'checkbox',
        cols: 3,
        valor: true,
        fullWidthMobile: true,
        mapaValores: [Status.ATIVO, Status.INATIVO],
        obrigatorio: true,
        ariaNome: 'Status do usuário',
      },
    ];
  }

  preencherDadosFormulario(usuario: any) {
    this.campos.forEach((campo) => {
      if (campo && campo.tipo === 'checkbox' && campo.mapaValores) {
        campo.valor = usuario[campo.id] === Status.INATIVO ? false : true;
      } else {
        campo.valor = usuario[campo.id];
      }
    });
  }

  salvar(camposForm: any) {
    if (camposForm.valid) {
      var usuario = this.tratarCamposForm(camposForm.value);
      if (this.id) {
        this.editar(this.id, usuario);
      } else {
        this.incluir(usuario);
      }
    }
  }

  incluir(usuario: Usuario) {
    this.usuarioService.adicionar(usuario).subscribe(() => {
      this.mensagemService.apresentarMensagemSucesso(
        'Usuário criado com sucesso!',
      );
      this.fechar();
    });
  }

  editar(id: any, usuario: Usuario) {
    this.usuarioService.editar(id, usuario).subscribe(() => {
      this.mensagemService.apresentarMensagemSucesso(
        'Usuário alterado com sucesso!',
      );
      this.fechar();
    });
  }

  tratarCamposForm(camposFormCadastro: any): Usuario {
    Object.keys(camposFormCadastro).forEach((key) => {
      var campo = this.campos.find((campo) => campo.id == key);

      if (campo && campo.tipo === 'checkbox' && campo.mapaValores) {
        camposFormCadastro[key] = !camposFormCadastro[key]
          ? campo.mapaValores[1]
          : campo.mapaValores[0];
      }
    });

    return camposFormCadastro;
  }

  fechar() {
    this.router.navigate(['/listar']);
  }

  getTextoAriaBotao(botaoVisualizar: boolean): string {
    return !botaoVisualizar
      ? this.id
        ? 'edição de usuário'
        : 'cadastro de usuário'
      : 'detalhe usuário';
  }
}
