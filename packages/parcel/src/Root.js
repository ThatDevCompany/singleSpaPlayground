"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
function Root(props) {
    return react_1.default.createElement("div", { style: { border: '1px solid white' } }, " My Parcel");
}
exports.default = Root;
