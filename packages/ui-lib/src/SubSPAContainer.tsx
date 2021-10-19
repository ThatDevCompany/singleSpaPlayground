import React, { useCallback } from 'react'
import SPAContainer, { SPAContainerProps } from './SPAContainer'
import Grow from '@mui/material/Grow'
import { navigate } from '@reach/router'

export function SubSPAContainer(props: SPAContainerProps) {
	const { mounted = false } = props
	return (
		<Overlay mounted={mounted}>
			<SPAContainer {...props} />
		</Overlay>
	)
}

export default SubSPAContainer

interface OverlayProps {
	mounted?: boolean
	children?: any
}

function Overlay(props: OverlayProps) {
	const { children, mounted = false } = props

	const handleClick = useCallback(() => navigate(-1), [])
	const handleStopProp = useCallback(e => e.stopPropagation(), [])

	return (
		<div
			style={{
				pointerEvents: mounted ? undefined : 'none',
				display: 'flex',
				backgroundColor: mounted ? 'rgb(50,50,50, 0.6)' : 'rgb(255,0,0, 0)',
				transition: 'background 0.5s',
				position: 'absolute',
				top: 0,
				right: 0,
				left: 0,
				bottom: 0,
			}}
			onClick={handleClick}
		>
			<Grow in={mounted}>
				<div
					style={{
						zIndex: 1,
						margin: 'auto',
						width: 400,
						height: 400,
						backgroundColor: 'white',
						border: '1px solid grey',
						borderRadius: 8,
						padding: 16,
					}}
					onClick={handleStopProp}
				>
					{children}
				</div>
			</Grow>
		</div>
	)
}
