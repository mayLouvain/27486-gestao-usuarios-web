import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCadastroBaseComponent } from './form-cadastro-base.component';

describe('FormCadastroBaseComponent', () => {
  let component: FormCadastroBaseComponent;
  let fixture: ComponentFixture<FormCadastroBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormCadastroBaseComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FormCadastroBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
