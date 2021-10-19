import React from 'react'
import ReactDOM from 'react-dom'
import singleSpaReact from 'single-spa-react'
import NavApp from './NavApp'

const lifecycles = singleSpaReact({
    React,
    ReactDOM,
    rootComponent: NavApp,
})

export const bootstrap = lifecycles.bootstrap
export const mount = lifecycles.mount
export const unmount = lifecycles.unmount
