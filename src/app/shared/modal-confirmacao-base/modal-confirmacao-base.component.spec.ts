import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalConfirmacaoBaseComponent } from './modal-confirmacao-base.component';

describe('ModalConfirmacaoBaseComponent', () => {
  let component: ModalConfirmacaoBaseComponent;
  let fixture: ComponentFixture<ModalConfirmacaoBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalConfirmacaoBaseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalConfirmacaoBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
