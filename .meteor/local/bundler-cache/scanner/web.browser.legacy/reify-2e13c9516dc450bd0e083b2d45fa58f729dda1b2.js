"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UiKitComponent = exports.version = void 0;
var version_1 = __importDefault(require("./version"));
exports.version = version_1.default;
console.log("fuselage-ui-kit version: " + version_1.default);
__exportStar(require("./hooks/useUiKitState"), exports);
__exportStar(require("./contexts/kitContext"), exports);
__exportStar(require("./surfaces"), exports);
var UiKitComponent_1 = require("./utils/UiKitComponent");
Object.defineProperty(exports, "UiKitComponent", { enumerable: true, get: function () { return UiKitComponent_1.UiKitComponent; } });
//# sourceMappingURL=index.js.map