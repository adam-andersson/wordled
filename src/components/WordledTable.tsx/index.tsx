import React, { FC, useState } from 'react'
import getCorrectPosition from '../../model/getCorrectPositions'
import WordledEditingRow from '../WordledEditingRow'
import WordledRow from '../WordledRow'

const legalGuesses = ['ELLEN', 'SOREN', 'ADAMS', 'TESTS', 'PASTA']

const WordledTable: FC = () => {
	const [guesses, setGuesses] = useState<string[]>([
		'ROWS1',
		'ROWS2',
		'PETER',
		'     ',
		'     ',
		'     ',
	])
	const [guessNumber, setGuessNumber] = useState<number>(3)
	const [isGameOver, setIsGameOver] = useState<boolean>(false)

	const setNewGuess = (newGuess: string[]) => {
		const stringifiedGuess = newGuess.join('')
		if (legalGuesses.includes(stringifiedGuess)) {
			const allGuesses = [...guesses]
			allGuesses[guessNumber] = stringifiedGuess
			setGuesses(allGuesses)
			if (guessNumber + 1 < 6) {
				setGuessNumber(guessNumber + 1)
			} else {
				setIsGameOver(true)
			}
			if (getCorrectPosition(newGuess).every((val) => val === 2)) {
				setIsGameOver(true)
			}
		}
	}

	return (
		<>
			{guesses.map((guess, i) => {
				const isCurrentGuessRow = guessNumber === i
				const key = `${i}-${guess}`
				return (
					<>
						<div
							style={{
								display: 'flex',
								flexDirection: 'row',
								marginTop: '10px',
							}}
						>
							{!isCurrentGuessRow ? (
								<WordledRow guessRow={guess} key={key} />
							) : (
								<WordledEditingRow setNewGuess={setNewGuess} key={key} />
							)}
						</div>
						{isGameOver && <div>Game is over</div>}
					</>
				)
			})}
		</>
	)
}
export default WordledTable
