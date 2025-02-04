module.export({Image:()=>Image});let styled;module.link('@rocket.chat/styled',{default(v){styled=v}},0);var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};

var filterImageProps = function (_a) {
    var imageUrl = _a.imageUrl, width = _a.width, height = _a.height, props = __rest(_a, ["imageUrl", "width", "height"]);
    return props;
};
var Image = styled('div', filterImageProps)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  box-shadow: 0 0 0px 1px rgba(204, 204, 204, 38%);\n  background-repeat: no-repeat;\n  background-position: 50%;\n  background-size: cover;\n  background-color: rgba(204, 204, 204, 38%);\n  background-image: url(", ");\n  width: ", "px;\n  height: ", "px;\n  overflow: hidden;\n"], ["\n  box-shadow: 0 0 0px 1px rgba(204, 204, 204, 38%);\n  background-repeat: no-repeat;\n  background-position: 50%;\n  background-size: cover;\n  background-color: rgba(204, 204, 204, 38%);\n  background-image: url(", ");\n  width: ", "px;\n  height: ", "px;\n  overflow: hidden;\n"])), function (props) { return props.imageUrl; }, function (props) { return String(props.width); }, function (props) { return String(props.height); });
var templateObject_1;
//# sourceMappingURL=ImageBlock.styles.js.map