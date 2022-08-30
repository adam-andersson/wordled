import React, { FC } from 'react'
import { SOLUTION } from '../../constants/word-list'
import { getGuessStatuses } from '../../lib/word-logic'
import Box from './Box'

const FinishedRow: FC<{ guess: string }> = ({ guess }) => {
	const splitGuess = guess.split('')
	const guessStatuses = getGuessStatuses(SOLUTION, guess)

	return (
		<>
			{splitGuess.map((char, i) => (
				<Box
					character={char}
					status={guessStatuses[i]}
					key={i}
				/>
			))}
		</>
	)
}
export default FinishedRow
