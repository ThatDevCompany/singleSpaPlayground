import {registerApplication, start} from 'single-spa'
import {constructApplications, constructLayoutEngine, constructRoutes} from 'single-spa-layout'

const routes = constructRoutes(document.querySelector('#single-spa-layout'))

const applications = constructApplications({
    routes,
    loadApp: ({name}) => System.import(name),
})

// Delay starting the layout engine until the UI-LIB is loaded
const layoutEngine = constructLayoutEngine({
    routes,
    applications,
    active: false,
})

applications.forEach(registerApplication)

System.import('@ssp/ui-lib').then(() => {
    layoutEngine.activate()
    start()
})
