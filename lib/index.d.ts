import { OpaqueToken } from '@angular/core';
export declare const CONFIG_INITIALIZER: OpaqueToken;
export declare function ConfigInitializer<T>(config: T): (targetConstructor: any) => any;
