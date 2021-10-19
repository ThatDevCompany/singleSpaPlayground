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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const navLinks_1 = require("./navLinks");
const react_1 = __importStar(require("react"));
const NavButton_1 = __importDefault(require("./NavButton"));
function NavApp(props) {
    react_1.useEffect(() => {
        window.addEventListener('doThing', e => {
            alert('Hello World!!!');
            console.log(e['detail']);
        });
    }, []);
    return (react_1.default.createElement("div", { style: { padding: 8 } }, navLinks_1.navLinks.map(link => (react_1.default.createElement(NavButton_1.default, { link: link })))));
}
exports.default = NavApp;
