/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { QuadrinhosService } from './quadrinhos.service';

describe('Service: Quadrinhos', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuadrinhosService]
    });
  });

  it('should ...', inject([QuadrinhosService], (service: QuadrinhosService) => {
    expect(service).toBeTruthy();
  }));
});
