import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit, HostBinding, OnDestroy } from '@angular/core';
import { ConfigInitializer } from 'ng2-config-initializer-decorator';

import { LayoutType, ConfigInitializerData } from './layout-type.enum';
import { LayoutManagerService } from './layout-manager.service';

@ConfigInitializer<ConfigInitializerData>({
  layout: LayoutType.RED_BACKGROUND,
})
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public layoutClassName: string;
  private subscription: Subscription;

  constructor(private layoutManagerService: LayoutManagerService) {}

  ngOnInit() {
    this.subscription = this.layoutManagerService.layoutClassName$
      .subscribe(layoutClass => this.layoutClassName = layoutClass);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
