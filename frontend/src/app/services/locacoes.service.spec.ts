import { TestBed } from '@angular/core/testing';

import { LocacoesService } from './locacoes.service';

describe('LocacoesService', () => {
  let service: LocacoesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocacoesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
