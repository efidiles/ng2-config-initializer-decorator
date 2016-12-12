import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

import { LayoutType, ConfigInitializerData } from './layout-type.enum';

interface LayoutClassName {
  [layoutType: number]: string;
}

const layoutClassName: LayoutClassName = {
  [LayoutType.DEFAULT]: '-default',
  [LayoutType.RED_BACKGROUND]: '-red-background',
};

@Injectable()
export class LayoutManagerService {
  public layout$: Observable<LayoutType>;
  public layoutClassName$: Observable<string>;

  private layoutSubject$: BehaviorSubject<LayoutType>;

  constructor() {
    this.layoutSubject$ = new BehaviorSubject(LayoutType.DEFAULT);
    this.layout$ = this.layoutSubject$.asObservable();
    this.layoutClassName$ = this.layout$.map((layout: LayoutType) => {
      return layoutClassName[layout];
    });
  }

  setLayout(layout: LayoutType) {
    this.layoutSubject$.next(layout);
  }
}
