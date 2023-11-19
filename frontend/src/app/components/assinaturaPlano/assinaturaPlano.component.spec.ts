import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssinaturaPlanoComponent } from './assinaturaPlano.component';

describe('AssinaturaPlanoComponent', () => {
  let component: AssinaturaPlanoComponent;
  let fixture: ComponentFixture<AssinaturaPlanoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssinaturaPlanoComponent]
    });
    fixture = TestBed.createComponent(AssinaturaPlanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});