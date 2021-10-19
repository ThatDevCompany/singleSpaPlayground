import React from 'react'

export interface SPAContainerProps {
    appId: string
    mounted?: boolean
    style?: any
}

export function SPAContainer(props: SPAContainerProps) {
    const {appId, mounted = false, style = {}} = props

    return (
        <div id={`single-spa-application:${appId}`} style={{display: mounted ? undefined : 'none', ...style}}/>
    )
}

export default SPAContainer
