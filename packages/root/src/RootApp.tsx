import React, { useEffect, useState } from 'react'
import { MainSPAContainer, SPAContainer, SubSPAContainer } from '@ssp/ui-lib'
import { getAppStatus, registerApplication, start } from 'single-spa'

function registerApp(name, activeWhen) {
	registerApplication({
		name,
		app: () => System.import(name),
		activeWhen,
	})
}

registerApp('@ssp/nav', '/')
registerApp('@ssp/settings', '/settings')
registerApp('@ssp/cheese', '/cheese')
registerApp('@ssp/subpagea', '/:type/a')
registerApp('@ssp/subpageb', '/:type/b')
start()

const isMounted = appId => getAppStatus(appId) === 'MOUNTED'

export function RootApp() {
	const [_, setRouteChanged] = useState(new Date())

	useEffect(() => {
		window.addEventListener('single-spa:routing-event', () => setRouteChanged(new Date()))
	}, [])

	return (
		<div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
			<SPAContainer appId="@ssp/nav" mounted={isMounted('@ssp/nav')} />
			<MainSPAContainer appId="@ssp/settings" mounted={isMounted('@ssp/settings')} />
			<MainSPAContainer appId="@ssp/cheese" mounted={isMounted('@ssp/cheese')} />
			<SubSPAContainer appId="@ssp/subpagea" mounted={isMounted('@ssp/subpagea')} />
			<SubSPAContainer appId="@ssp/subpageb" mounted={isMounted('@ssp/subpageb')} />
		</div>
	)
}

export default RootApp
