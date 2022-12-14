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
		<div style={{display: 'flex', flexDirection: 'column', gap: '0.4em', justifyContent: 'center'}}>
			{guesses.map((guess, i) => (
				<div style={{display: 'flex', flexDirection: 'row', gap: '0.4em'}} key={i}>
					<FinishedRow guess={guess} />
				</div>
			))}
			{guesses.length < NUMBER_OF_GUESSES && (
				<div style={{display: 'flex', flexDirection: 'row', gap: '0.4em'}}>
					<CurrentRow guess={currentGuess} currentBoxIdx={currentBoxIdx} isActiveGuessInvalid={isActiveGuessInvalid} />
				</div>
			)}
			{emptyRows.map((_, i) => (
				<div style={{display: 'flex', flexDirection: 'row', gap: '0.4em'}} key={i}>
					<EmptyRow/>
				</div>
			))}
		</div>   
	)
}

export default Grid
