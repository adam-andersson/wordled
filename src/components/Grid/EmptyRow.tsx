import React, { FC } from 'react'
import { WORD_LENGTH } from '../../constants/guesses'
import Box from './Box'

const EmptyRow: FC = () => {

	const emptyBoxes = Array.from(Array(WORD_LENGTH))

	return (
		<>
			{emptyBoxes.map((_, i) => (
				<Box key={i}/>
			))}
		</>
	)
}
export default EmptyRow
