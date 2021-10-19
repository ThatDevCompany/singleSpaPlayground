import React from 'react'
import SPAContainer, { SPAContainerProps } from './SPAContainer'

export function MainSPAContainer(props: SPAContainerProps) {
	return (
		<SPAContainer
			{...props}
			style={{
				padding: 16,
				flex: 1,
				backgroundColor: 'black',
				color: 'white',
			}}
		/>
	)
}

export default MainSPAContainer
