"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheeseApp = void 0;
const react_1 = __importDefault(require("react"));
const router_1 = require("@reach/router");
const ui_lib_1 = require("@ssp/ui-lib");
function CheeseApp() {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(ui_lib_1.H1, null, "Cheese"),
        react_1.default.createElement("br", null),
        react_1.default.createElement(router_1.Link, { to: "cheese/a", style: { color: 'white', margin: 4 } }, "Open A"),
        react_1.default.createElement(router_1.Link, { to: "cheese/b", style: { color: 'white', margin: 4 } }, "Open B")));
}
exports.CheeseApp = CheeseApp;
exports.default = CheeseApp;
