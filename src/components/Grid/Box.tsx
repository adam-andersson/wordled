import React, { FC } from 'react'
import { getBoxColor } from '../../helpers/get-box-color'
import { CharStatus } from '../../lib/word-logic'
import './Grid.scss'

const Box: FC<{
  character?: string
  status?: CharStatus
  isSelectedBox?: boolean
  isActiveGuessInvalid?: boolean
}> = ({ character, status, isSelectedBox, isActiveGuessInvalid }) => {
	const backgroundColor = getBoxColor(status, isSelectedBox, isActiveGuessInvalid)
	
	return (
		<div className="grid__box" style={{ backgroundColor }}>
			{character?.toUpperCase()}
			<span style={{position: 'absolute', bottom: '8px'}}>{isSelectedBox && '_'}</span>
			
		</div>
	)
}

export default Box
