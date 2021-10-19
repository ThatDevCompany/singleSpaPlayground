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
Object.defineProperty(exports, "__esModule", { value: true });
exports.RootApp = void 0;
const react_1 = __importStar(require("react"));
const ui_lib_1 = require("@ssp/ui-lib");
const single_spa_1 = require("single-spa");
function registerApp(name, activeWhen) {
    single_spa_1.registerApplication({
        name,
        app: () => System.import(name),
        activeWhen,
    });
}
registerApp('@ssp/nav', '/');
registerApp('@ssp/settings', '/settings');
registerApp('@ssp/cheese', '/cheese');
registerApp('@ssp/subpagea', '/:type/a');
registerApp('@ssp/subpageb', '/:type/b');
single_spa_1.start();
const isMounted = appId => single_spa_1.getAppStatus(appId) === 'MOUNTED';
function RootApp() {
    const [_, setRouteChanged] = react_1.useState(new Date());
    react_1.useEffect(() => {
        window.addEventListener('single-spa:routing-event', () => setRouteChanged(new Date()));
    }, []);
    return (react_1.default.createElement("div", { style: { display: 'flex', flexDirection: 'column', height: '100%' } },
        react_1.default.createElement(ui_lib_1.SPAContainer, { appId: "@ssp/nav", mounted: isMounted('@ssp/nav') }),
        react_1.default.createElement(ui_lib_1.MainSPAContainer, { appId: "@ssp/settings", mounted: isMounted('@ssp/settings') }),
        react_1.default.createElement(ui_lib_1.MainSPAContainer, { appId: "@ssp/cheese", mounted: isMounted('@ssp/cheese') }),
        react_1.default.createElement(ui_lib_1.SubSPAContainer, { appId: "@ssp/subpagea", mounted: isMounted('@ssp/subpagea') }),
        react_1.default.createElement(ui_lib_1.SubSPAContainer, { appId: "@ssp/subpageb", mounted: isMounted('@ssp/subpageb') })));
}
exports.RootApp = RootApp;
exports.default = RootApp;
