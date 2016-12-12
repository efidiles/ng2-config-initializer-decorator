## Jump to

* [Overview](#overview)
* [Usage](#usage)
* [Installation](#installation)
* [Links](#links)
* [License](#license)

## Overview 
[[jump to TOC](#jump-to)]

A decorator for angular2 components which allows to pass arbitrary data to 
a custom defined service.  
The service will then behave as a proxy to invoke other specialized services, passing 
data received from the decorator.  

Examples of real world use cases:
- set a specific layout arrangement when navigating to a route by toggling on and off different router outlets
- set the active main menu item when the same item is shared by multiple routes

## Installation
[[jump to TOC](#jump-to)]

1. Install the package:  
```sh
$ npm install ng2-config-initializer-decorator --save
```

## Usage
[[jump to TOC](#jump-to)]

In a router component (feature component) use the decorator like the following:  
(comments added to highlight the important lines) 

**app.component.ts**

```js
import { ConfigInitializer } from 'ng2-config-initializer-decorator';

// <any> just to keep focus on the important bits 
// but a type can be defined and used here
@ConfigInitializer<any>({
  layout: 'someLayoutEnumValue',
  mainMenuItem: 'someMainMenuEnumValue',
  someOtherData: 'someOtherValue',
})
// this is the normal Component decorator
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css'],
//   ...
// })
// export class AppComponent implements OnInit {
    ...
``` 

This decorator will invoke and pass the data to a provider 
defined for the `CONFIG_INITIALIZER` token.  
The `CONFIG_INITIALIZER` is exported by the 
`ng2-config-initializer-decorator` module.

Example for the `CONFIG_INITIALIZER` provider: 

**app.module.ts**

```js
import { CONFIG_INITIALIZER } from 'ng2-config-initializer-decorator';

const configInitializer: FactoryProvider = {
  provide: CONFIG_INITIALIZER,
  deps: [
  //  LayoutManagerService, 
  //  MainMenuService
  ],
  useFactory: 
  //  (
  //    layoutManagerService: LayoutManagerService,
  //    mainMenuService: MainMenuService,
  //  ) => {
  //    return (configInitializerData: any) => {
  //      // configInitializerData is the object passed to the decorator
  //      layoutManagerService.setLayout(configInitializerData.layout);
  //      mainMenuService.setActive(configInitializerData.mainMenuItem);
  //    };
  //  },
};

// @NgModule({
//   declarations: [
//     AppComponent
//   ],
//   imports: [
//     ...
//   ],
  providers: [
    configInitializer,
    ...
  ],
```

This factory service will receive the data passed to the decorator 
and based on that data it can invoke and pass the data to other specialised services 
such as a LayoutManagerService, a MainMenuService etc.

```js
 ...
// useFactory: 
//    (
//      layoutManagerService: LayoutManagerService,
//      mainMenuService: MainMenuService,
//    ) => {
//      return (configInitializerData: any) => {
          // configInitializerData is the object passed to the decorator
          layoutManagerService.setLayout(configInitializerData.layout);
          mainMenuService.setActive(configInitializerData.mainMenuItem);
//      };
//    },
```

For a full working example check the `./example` folder.  
The example also demonstrates how to statically type the decorator.

## Links 
[[jump to TOC](#jump-to)]

NPM:  
[https://www.npmjs.com/package/ng2-config-initializer-decorator](https://www.npmjs.com/package/ng2-config-initializer-decorator)  
GITHUB:  
[https://github.com/efidiles/ng2-config-initializer-decorator.git](https://github.com/efidiles/ng2-config-initializer-decorator.git)  

## Author 
[[jump to TOC](#jump-to)]

**Eduard Fidiles**

* [github/efidiles](https://github.com/efidiles)  
* [twitter/efidiles](http://twitter.com/efidiles)  

## License 
[[jump to TOC](#jump-to)]  
Released under the [MIT license](https://github.com/ng2-config-initializer-decorator/ng2-config-initializer-decorator/blob/master/LICENSE).


Copyright © 2016, [Eduard Fidiles](https://github.com/efidiles)  
