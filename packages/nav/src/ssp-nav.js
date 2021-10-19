"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.unmount = exports.mount = exports.bootstrap = void 0;
const react_1 = __importDefault(require("react"));
const react_dom_1 = __importDefault(require("react-dom"));
const single_spa_react_1 = __importDefault(require("single-spa-react"));
const NavApp_1 = __importDefault(require("./NavApp"));
const lifecycles = single_spa_react_1.default({
    React: react_1.default,
    ReactDOM: react_dom_1.default,
    rootComponent: NavApp_1.default,
});
exports.bootstrap = lifecycles.bootstrap;
exports.mount = lifecycles.mount;
exports.unmount = lifecycles.unmount;
