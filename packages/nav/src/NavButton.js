"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = require("@reach/router");
const react_1 = __importDefault(require("react"));
function NavButton(props) {
    const { link } = props;
    return (react_1.default.createElement(router_1.Link, { style: {
            padding: 8,
            margin: '0 8px',
            color: 'red',
            textDecoration: 'none',
            fontSize: 24,
        }, key: link.href, to: link.href }, link.name));
}
exports.default = NavButton;
