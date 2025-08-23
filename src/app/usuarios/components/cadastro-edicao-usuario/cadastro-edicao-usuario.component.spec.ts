import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroEdicaoUsuarioComponent } from './cadastro-edicao-usuario.component';

describe('CadastroEdicaoUsuarioComponent', () => {
  let component: CadastroEdicaoUsuarioComponent;
  let fixture: ComponentFixture<CadastroEdicaoUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastroEdicaoUsuarioComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CadastroEdicaoUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
