import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidacaoBaseComponent } from './validacao-base.component';

describe('ValidacaoBaseComponent', () => {
  let component: ValidacaoBaseComponent;
  let fixture: ComponentFixture<ValidacaoBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValidacaoBaseComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ValidacaoBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
