"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainSPAContainer = void 0;
const react_1 = __importDefault(require("react"));
const SPAContainer_1 = __importDefault(require("./SPAContainer"));
function MainSPAContainer(props) {
    return (react_1.default.createElement(SPAContainer_1.default, Object.assign({}, props, { style: {
            padding: 16,
            flex: 1,
            backgroundColor: 'black',
            color: 'white',
        } })));
}
exports.MainSPAContainer = MainSPAContainer;
exports.default = MainSPAContainer;
