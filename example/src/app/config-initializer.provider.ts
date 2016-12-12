import { FactoryProvider } from '@angular/core';
import { CONFIG_INITIALIZER } from 'ng2-config-initializer-decorator';

import { LayoutManagerService } from './layout-manager.service';
import { ConfigInitializerData } from './layout-type.enum';
import { configInitializerFactory } from './config-initializer.factory';

export const configInitializer: FactoryProvider = {
  provide: CONFIG_INITIALIZER,
  deps: [LayoutManagerService],
  useFactory: configInitializerFactory,
};
