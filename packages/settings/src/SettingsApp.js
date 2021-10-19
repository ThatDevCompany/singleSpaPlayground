"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingsApp = void 0;
const react_1 = __importStar(require("react"));
const ui_lib_1 = require("@ssp/ui-lib");
const router_1 = require("@reach/router");
function SettingsApp(props) {
    const { mountParcel } = props;
    const innerRef = react_1.useRef();
    const handleClick = react_1.useCallback(() => {
        window.dispatchEvent(new CustomEvent('doThing', { detail: { a: 1 } }));
    }, []);
    react_1.useEffect(() => {
        if (innerRef.current) {
            System.import('@ssp/parcel').then(MyParcel => {
                mountParcel(MyParcel, { domElement: innerRef.current });
            });
        }
    }, [innerRef.current]);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(ui_lib_1.H1, null, "Settings"),
        react_1.default.createElement("br", null),
        react_1.default.createElement(router_1.Link, { to: "settings/a", style: { color: 'white', margin: 4 } }, "Open A"),
        react_1.default.createElement(router_1.Link, { to: "settings/b", style: { color: 'white', margin: 4 } }, "Open B"),
        react_1.default.createElement("br", null),
        react_1.default.createElement("br", null),
        react_1.default.createElement(ui_lib_1.Button, { label: "Press Me", onClick: handleClick }),
        react_1.default.createElement("br", null),
        react_1.default.createElement("br", null),
        react_1.default.createElement("div", { ref: innerRef })));
}
exports.SettingsApp = SettingsApp;
exports.default = SettingsApp;
