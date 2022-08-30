import React, { FC } from 'react'
import { SOLUTION } from '../../constants/word-list'
import Box from './Box'

const EmptyRow: FC = () => {

	const emptyBoxes = Array.from(Array(SOLUTION.length))

	return (
		<>
			{emptyBoxes.map((_, i) => (
				<Box key={i}/>
			))}
		</>
	)
}
export default EmptyRow
