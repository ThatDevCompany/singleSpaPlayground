"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SPAContainer = void 0;
const react_1 = __importDefault(require("react"));
function SPAContainer(props) {
    const { appId, mounted = false, style = {} } = props;
    return (react_1.default.createElement("div", { id: `single-spa-application:${appId}`, style: Object.assign({ display: mounted ? undefined : 'none' }, style) }));
}
exports.SPAContainer = SPAContainer;
exports.default = SPAContainer;
