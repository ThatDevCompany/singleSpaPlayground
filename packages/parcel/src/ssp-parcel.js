"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.unmount = exports.mount = exports.bootstrap = exports.name = void 0;
const react_1 = __importDefault(require("react"));
const react_dom_1 = __importDefault(require("react-dom"));
const single_spa_react_1 = __importDefault(require("single-spa-react"));
const Root_1 = __importDefault(require("./Root"));
const singleSpaReactLifecycle = single_spa_react_1.default({
    React: react_1.default,
    ReactDOM: react_dom_1.default,
    rootComponent: Root_1.default,
});
exports.name = 'ssp-parcel';
exports.bootstrap = [singleSpaReactLifecycle.bootstrap];
exports.mount = [singleSpaReactLifecycle.mount];
exports.unmount = [singleSpaReactLifecycle.unmount];
