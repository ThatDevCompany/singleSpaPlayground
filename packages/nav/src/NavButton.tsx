import { Link } from '@reach/router'
import { NavLink } from './navLinks'
import React from 'react'

export interface NavButtonProps {
	link: NavLink
}

export default function NavButton(props: NavButtonProps) {
	const { link } = props
	return (
		<Link
			style={{
				padding: 8,
				margin: '0 8px',
				color: 'red',
				textDecoration: 'none',
				fontSize: 24,
			}}
			key={link.href}
			to={link.href}
		>
			{link.name}
		</Link>
	)
}
