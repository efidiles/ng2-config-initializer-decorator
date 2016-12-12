import { LayoutManagerService } from './layout-manager.service';
import { ConfigInitializerData } from './layout-type.enum';

export function configInitializerFactory(layoutManagerService: LayoutManagerService) {
  return (configInitializerData: ConfigInitializerData) => {
    layoutManagerService.setLayout(configInitializerData.layout);
  };
}
