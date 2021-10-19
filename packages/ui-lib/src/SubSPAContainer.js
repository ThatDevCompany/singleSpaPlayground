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
exports.SubSPAContainer = void 0;
const react_1 = __importStar(require("react"));
const SPAContainer_1 = __importDefault(require("./SPAContainer"));
const Grow_1 = __importDefault(require("@mui/material/Grow"));
const router_1 = require("@reach/router");
function SubSPAContainer(props) {
    const { mounted = false } = props;
    return (react_1.default.createElement(Overlay, { mounted: mounted },
        react_1.default.createElement(SPAContainer_1.default, Object.assign({}, props))));
}
exports.SubSPAContainer = SubSPAContainer;
exports.default = SubSPAContainer;
function Overlay(props) {
    const { children, mounted = false } = props;
    const handleClick = react_1.useCallback(() => router_1.navigate(-1), []);
    const handleStopProp = react_1.useCallback(e => e.stopPropagation(), []);
    return (react_1.default.createElement("div", { style: {
            pointerEvents: mounted ? undefined : 'none',
            display: 'flex',
            backgroundColor: mounted ? 'rgb(50,50,50, 0.6)' : 'rgb(255,0,0, 0)',
            transition: 'background 0.5s',
            position: 'absolute',
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
        }, onClick: handleClick },
        react_1.default.createElement(Grow_1.default, { in: mounted },
            react_1.default.createElement("div", { style: {
                    zIndex: 1,
                    margin: 'auto',
                    width: 400,
                    height: 400,
                    backgroundColor: 'white',
                    border: '1px solid grey',
                    borderRadius: 8,
                    padding: 16,
                }, onClick: handleStopProp }, children))));
}
