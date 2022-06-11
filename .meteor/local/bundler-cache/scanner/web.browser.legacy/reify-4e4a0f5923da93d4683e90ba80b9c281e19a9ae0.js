"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSurfaceType = exports.SurfaceContext = void 0;
var react_1 = require("react");
exports.SurfaceContext = (0, react_1.createContext)('message');
var useSurfaceType = function () {
    return (0, react_1.useContext)(exports.SurfaceContext);
};
exports.useSurfaceType = useSurfaceType;
//# sourceMappingURL=SurfaceContext.js.map