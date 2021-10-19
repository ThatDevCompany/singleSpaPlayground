"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_dom_1 = __importDefault(require("react-dom"));
const RootApp_1 = __importDefault(require("./RootApp"));
const root = document.createElement('div');
document.body.appendChild(root);
react_dom_1.default.render(react_1.default.createElement(RootApp_1.default, null), root);
