import React, { FC } from 'react'
import getCorrectPosition from '../../model/getCorrectPositions'
import WordledBox from '../WordledBox'

const WordledRow: FC<{ guessRow: string }> = ({ guessRow }) => {
	const guessArr = guessRow.split('')

	const positionArr = getCorrectPosition(guessArr)

	return (
		<>
			{guessArr.map((char, i) => (
				<WordledBox
					character={char}
					correctness={positionArr[i]}
					key={`${Math.random()}${i.toString()}`}
				/>
			))}
		</>
	)
}
export default WordledRow
