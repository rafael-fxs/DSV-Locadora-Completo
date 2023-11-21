import { TestBed } from '@angular/core/testing';

import { AssinaturaPlanoService } from './assinaturaPlano.service';

describe('AssinaturaPlanoService', () => {
  let service: AssinaturaPlanoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssinaturaPlanoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
