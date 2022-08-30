import React, { FC } from 'react'
import { NUMBER_OF_GUESSES } from '../../constants/guesses'
import CurrentRow from './CurrentRow'
import EmptyRow from './EmptyRow'
import FinishedRow from './FinishedRow'

type Props = {
    guesses: string[]
    currentGuess: string
	currentBoxIdx: number
	isActiveGuessInvalid: boolean
  }

const Grid: FC<Props> = ({
	guesses,
	currentGuess,
	currentBoxIdx,
	isActiveGuessInvalid,
}) => {
	const emptyRows = guesses.length < NUMBER_OF_GUESSES - 1 ? Array.from(Array(NUMBER_OF_GUESSES - 1 - guesses.length)) : []

	return (
		<div style={{display: 'flex', flexDirection: 'column', gap: '0.3rem', justifyContent: 'center'}}>
			{guesses.map((guess, i) => (
				<div style={{display: 'flex', flexDirection: 'row'}} key={i}>
					<FinishedRow guess={guess} />
				</div>
			))}
			{guesses.length < NUMBER_OF_GUESSES && (
				<div style={{display: 'flex', flexDirection: 'row' }}>
					<CurrentRow guess={currentGuess} currentBoxIdx={currentBoxIdx} isActiveGuessInvalid={isActiveGuessInvalid} />
				</div>
			)}
			{emptyRows.map((_, i) => (
				<div style={{display: 'flex', flexDirection: 'row'}} key={i}>
					<EmptyRow/>
				</div>
			))}
		</div>   
	)
}

export default Grid
