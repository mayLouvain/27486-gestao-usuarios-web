import { Usuario } from './../models/usuario.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, map, Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UsuarioService {
  private usuariosUrl = '../../../assets/mocks/mock-usuarios.json';
  private listaUsuarios: Usuario[] | undefined;

  constructor(private http: HttpClient) {}

  listar(): Observable<Usuario[]> {
    if (this.listaUsuarios) {
      return of(this.listaUsuarios).pipe(delay(500));
    }
    this.listaUsuarios = [];
    return this.http.get<Usuario[]>(this.usuariosUrl).pipe(
      map((data: Usuario[]) => {
        this.listaUsuarios = data;
        return this.listaUsuarios;
      }),
      delay(500),
    );
  }

  consultar(id: any): Observable<Usuario | null> {
    var usuario: Usuario | null = this.listaUsuarios?.length
      ? this.listaUsuarios.find((usuario) => usuario.id == id)!
      : null;
    return of(usuario);
  }

  adicionar(usuario: Usuario): Observable<Usuario> {
    usuario.id = this.listaUsuarios?.length
      ? Math.max(...this.listaUsuarios.map((u: { id: any }) => u.id)) + 1
      : 1;
    this.listaUsuarios?.push(usuario);
    return of(usuario).pipe(delay(300));
  }

  editar(id: any, usuarioAtualizado: Usuario): Observable<Usuario> {
    usuarioAtualizado.id = id;

    this.listaUsuarios = this.listaUsuarios?.map((usuario) =>
      usuario.id == usuarioAtualizado.id
        ? { ...usuario, ...usuarioAtualizado }
        : usuario,
    );

    return of(usuarioAtualizado).pipe(delay(300));
  }

  excluir(id: number): Observable<boolean> {
    const index = this.listaUsuarios
      ? this.listaUsuarios.findIndex((usuario) => usuario.id == id)
      : -1;
    console.log('index - ', index);
    if (index !== -1) {
      this.listaUsuarios?.splice(index, 1);

      console.log(this.listaUsuarios);
      return of(true).pipe(delay(300));
    }
    return of(false).pipe(delay(300));
  }
}
