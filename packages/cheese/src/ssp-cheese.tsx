import React from 'react'
import ReactDOM from 'react-dom'
import singleSpaReact from 'single-spa-react'
import CheeseApp from './CheeseApp'

const lifecycles = singleSpaReact({
    React,
    ReactDOM,
    rootComponent: CheeseApp,
    errorBoundary(err, info, props) {
        return (
            <div className="h-16 flex items-center justify-between px-6 bg-primary text-white">Error</div>
        )
    },
})

export const bootstrap = lifecycles.bootstrap
export const mount = lifecycles.mount
export const unmount = lifecycles.unmount
