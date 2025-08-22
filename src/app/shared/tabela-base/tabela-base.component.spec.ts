import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaBaseComponent } from './tabela-base.component';

describe('TabelaBaseComponent', () => {
  let component: TabelaBaseComponent;
  let fixture: ComponentFixture<TabelaBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabelaBaseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TabelaBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
