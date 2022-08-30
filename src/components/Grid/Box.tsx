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
				width: '3.5rem',
				height: '3.5rem',
				backgroundColor,
				marginRight: '0.15rem',
				marginLeft: '0.15rem',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				borderRadius: '0.5rem',
				fontSize: '25px'
			}}
		>
			{character?.toUpperCase()}
		</div>
	)
}

export default Box
