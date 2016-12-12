import { OpaqueToken, Inject } from '@angular/core';

export const CONFIG_INITIALIZER = new OpaqueToken('Config initializer');

export function ConfigInitializer<T>(config: T) {
	type ConfigInitializerType = (config: T) => void;

	const reflect: any = (window as any)['Reflect'];
	const getOwnMetadata: Function = reflect.getOwnMetadata;
	const defineMetadata: Function = reflect.defineMetadata;

	return function ConfigInitializerDecorator(targetConstructor: any) {
		const metaInformation = getOwnMetadata('annotations', targetConstructor);
		const designParamtypesInformation = getOwnMetadata('design:paramtypes', targetConstructor);
		const parametersInformation = getOwnMetadata('parameters', targetConstructor);

		function newConstructor(
			configInitializer: ConfigInitializerType,
			...args: any[],
		) {
			configInitializer(config);

			// tslint:disable-next-line:no-invalid-this
			return targetConstructor.apply(this, args);
		}

		defineMetadata('annotations', metaInformation, newConstructor);
		defineMetadata('parameters', parametersInformation, newConstructor);
		defineMetadata(
			'design:paramtypes',
			[
				new Inject(CONFIG_INITIALIZER),
				...designParamtypesInformation,
			],
			newConstructor,
		);

		newConstructor.prototype = targetConstructor.prototype;

		return newConstructor as typeof targetConstructor;
	};
}
