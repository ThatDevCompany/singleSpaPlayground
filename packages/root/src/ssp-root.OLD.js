"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const single_spa_1 = require("single-spa");
const single_spa_layout_1 = require("single-spa-layout");
const routes = single_spa_layout_1.constructRoutes(document.querySelector('#single-spa-layout'));
const applications = single_spa_layout_1.constructApplications({
    routes,
    loadApp: ({ name }) => System.import(name),
});
// Delay starting the layout engine until the UI-LIB is loaded
const layoutEngine = single_spa_layout_1.constructLayoutEngine({
    routes,
    applications,
    active: false,
});
applications.forEach(single_spa_1.registerApplication);
System.import('@ssp/ui-lib').then(() => {
    layoutEngine.activate();
    single_spa_1.start();
});
