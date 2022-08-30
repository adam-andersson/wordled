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
				width: '80px',
				height: '80px',
				backgroundColor,
				marginRight: '5px',
				marginLeft: '5px',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				borderRadius: '10px',
			}}
		>
			{character?.toUpperCase()}
		</div>
	)
}

export default Box
