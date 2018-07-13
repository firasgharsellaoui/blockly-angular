import { TestBed, inject } from '@angular/core/testing';

import { SendCodeService } from './send-code.service';

describe('SendCodeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SendCodeService]
    });
  });

  it('should be created', inject([SendCodeService], (service: SendCodeService) => {
    expect(service).toBeTruthy();
  }));
});
