/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LayoutManagerService } from './layout-manager.service';

describe('LayoutManagerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LayoutManagerService]
    });
  });

  it('should ...', inject([LayoutManagerService], (service: LayoutManagerService) => {
    expect(service).toBeTruthy();
  }));
});
