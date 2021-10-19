import { navLinks } from './navLinks'
import React, { useEffect } from 'react'
import NavButton from './NavButton'

export default function NavApp(props) {
	useEffect(() => {
		window.addEventListener('doThing', e => {
			alert('Hello World!!!')
			console.log(e['detail'])
		})
	}, [])

	return (
		<div style={{ padding: 8 }}>
			{navLinks.map(link => (
				<NavButton link={link} />
			))}
		</div>
	)
}
