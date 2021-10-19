"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.H1 = void 0;
const react_1 = __importDefault(require("react"));
function H1(props) {
    return react_1.default.createElement("h1", null, props.children);
}
exports.H1 = H1;
exports.default = H1;
