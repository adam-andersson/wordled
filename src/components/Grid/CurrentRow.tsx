import React, { FC } from 'react'
import Box from './Box'

const CurrentRow: FC<{ guess: string, currentBoxIdx: number, isActiveGuessInvalid: boolean }> = ({ guess, currentBoxIdx = 0, isActiveGuessInvalid }) => {
	const splitGuess = guess.split('')

	return (
		<>
			{splitGuess.map((char, i) => (
				<Box
					character={char}
					isSelectedBox={i === currentBoxIdx}
					isActiveGuessInvalid={isActiveGuessInvalid}
					key={i}
				/>
			))}
		</>
	)
}
export default CurrentRow
