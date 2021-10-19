import React, { useCallback, useEffect, useRef } from 'react'
import { Button, H1 } from '@ssp/ui-lib'
import { Link } from '@reach/router'

export function SettingsApp(props) {
	const { mountParcel } = props
	const innerRef = useRef()
	const handleClick = useCallback(() => {
		window.dispatchEvent(new CustomEvent('doThing', { detail: { a: 1 } }))
	}, [])

	useEffect(() => {
		if (innerRef.current) {
			System.import('@ssp/parcel').then(MyParcel => {
				mountParcel(MyParcel, { domElement: innerRef.current })
			})
		}
	}, [innerRef.current])

	return (
		<>
			<H1>Settings</H1>
			<br />
			<Link to="settings/a" style={{ color: 'white', margin: 4 }}>
				Open A
			</Link>
			<Link to="settings/b" style={{ color: 'white', margin: 4 }}>
				Open B
			</Link>
			<br />
			<br />
			<Button label="Press Me" onClick={handleClick} />
			<br />
			<br />
			<div ref={innerRef} />
		</>
	)
}

export default SettingsApp
