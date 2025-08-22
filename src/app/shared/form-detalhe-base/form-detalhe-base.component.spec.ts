import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDetalheBaseComponent } from './form-detalhe-base.component';

describe('FormDetalheBaseComponent', () => {
  let component: FormDetalheBaseComponent;
  let fixture: ComponentFixture<FormDetalheBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormDetalheBaseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormDetalheBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
