"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.unmount = exports.mount = exports.bootstrap = void 0;
require("./set-public-path");
const vue_1 = __importDefault(require("vue"));
const SubPageBApp_vue_1 = __importDefault(require("./SubPageBApp.vue"));
const single_spa_vue_1 = __importDefault(require("single-spa-vue"));
const vueLifecycles = single_spa_vue_1.default({
    Vue: vue_1.default,
    appOptions: {
        render(h) {
            return h(SubPageBApp_vue_1.default);
        },
    },
});
exports.bootstrap = vueLifecycles.bootstrap;
exports.mount = vueLifecycles.mount;
exports.unmount = vueLifecycles.unmount;
