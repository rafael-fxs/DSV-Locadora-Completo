import { TestBed } from '@angular/core/testing';

import { FilmesService } from './filme.service';

describe('FilmeService', () => {
  let service: FilmesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilmeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});