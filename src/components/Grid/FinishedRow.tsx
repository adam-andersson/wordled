import React, { FC } from 'react'
import { ANSWER } from '../../constants/answer'
import { getGuessStatuses } from '../../lib/word-logic'
import Box from './Box'

const FinishedRow: FC<{ guess: string }> = ({ guess }) => {
	const splitGuess = guess.split('')
	const guessStatuses = getGuessStatuses(ANSWER, guess)

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
