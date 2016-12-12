"use strict";
var core_1 = require("@angular/core");
exports.CONFIG_INITIALIZER = new core_1.OpaqueToken('Config initializer');
function ConfigInitializer(config) {
    var reflect = window['Reflect'];
    var getOwnMetadata = reflect.getOwnMetadata;
    var defineMetadata = reflect.defineMetadata;
    return function ConfigInitializerDecorator(targetConstructor) {
        var metaInformation = getOwnMetadata('annotations', targetConstructor);
        var designParamtypesInformation = getOwnMetadata('design:paramtypes', targetConstructor);
        var parametersInformation = getOwnMetadata('parameters', targetConstructor);
        function newConstructor(configInitializer) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            configInitializer(config);
            return targetConstructor.apply(this, args);
        }
        defineMetadata('annotations', metaInformation, newConstructor);
        defineMetadata('parameters', parametersInformation, newConstructor);
        defineMetadata('design:paramtypes', [
            new core_1.Inject(exports.CONFIG_INITIALIZER)
        ].concat(designParamtypesInformation), newConstructor);
        newConstructor.prototype = targetConstructor.prototype;
        return newConstructor;
    };
}
exports.ConfigInitializer = ConfigInitializer;
//# sourceMappingURL=index.js.map