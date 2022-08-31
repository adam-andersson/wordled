import React, { FC } from 'react'
import { getBoxColor } from '../../helpers/get-box-color'
import { CharStatus } from '../../lib/word-logic'

const Box: FC<{
  character?: string
  status?: CharStatus
  isSelectedBox?: boolean
  isActiveGuessInvalid?: boolean
}> = ({ character, status, isSelectedBox, isActiveGuessInvalid }) => {
	const backgroundColor = getBoxColor(status, isSelectedBox, isActiveGuessInvalid)
	
	return (
		<div
			style={{
				width: 'clamp(1.5rem, 15vmin , 3.5rem)',
				height: 'clamp(1.5rem, 15vmin , 3.5rem)',
				backgroundColor,
				marginRight: '0.4vmin',
				marginLeft: '0.4vmin',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				borderRadius: 'clamp(0.2rem, 2vmin, 0.5rem)',
				fontSize: '25px',
				position: 'relative'
			}}
		>
			{character?.toUpperCase()}
			<span style={{position: 'absolute', bottom: '8px'}}>{isSelectedBox && '_'}</span>
			
		</div>
	)
}

export default Box
