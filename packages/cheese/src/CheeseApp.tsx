import React from 'react'
import { Link } from '@reach/router'
import { H1 } from '@ssp/ui-lib'

export function CheeseApp() {
	return (
		<>
			<H1>Cheese</H1>
			<br />
			<Link to="cheese/a" style={{ color: 'white', margin: 4 }}>
				Open A
			</Link>
			<Link to="cheese/b" style={{ color: 'white', margin: 4 }}>
				Open B
			</Link>
		</>
	)
}

export default CheeseApp
