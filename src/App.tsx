import React, { useEffect, useState } from 'react'
import './App.css'
import Grid from './components/Grid'
import WordledHeader from './components/WordledHeader'
import { NUMBER_OF_GUESSES, WORD_LENGTH } from './constants/guesses'
import { ALPHABET, SOLUTION, WORDS } from './constants/word-list'
import { setCharAt } from './helpers/set-char-at'

const App = () => {
	const [currentGuess, setCurrentGuess] = useState('     ')
	const [currentBoxIdx, setCurrentBoxIdx] = useState<number>(0)
	const [guesses, setGuesses] = useState<string[]>(['peter', 'aaaaa', 'ellen'])
	const [isInvalidGuess, setIsInvalidGuess] = useState<boolean>(false)
	const [isGameLost, setIsGameLost] = useState<boolean>(false)
	const [isGameWon, setIsGameWon] = useState<boolean>(false)

	const checkWinLoseCondition = () => {
		if (guesses[guesses.length - 1] === SOLUTION) {
			setIsGameWon(true)
			return
		}
		if (guesses.length === NUMBER_OF_GUESSES) {
			setIsGameLost(true)
		}
	}

	useEffect(() => checkWinLoseCondition(), [guesses])

	const onEnterKey = () => {
		if (isInvalidGuess) return
		if (WORDS.includes(currentGuess)) {
			setGuesses([...guesses, currentGuess])
			setCurrentBoxIdx(0)
			setCurrentGuess('     ')
			setIsInvalidGuess(false)
		} else {
			setIsInvalidGuess(true)
		}
		
	}

	const onDeleteKey = () => {
		const updatedGuess = setCharAt(currentGuess, currentBoxIdx, ' ')
		setCurrentGuess(updatedGuess)
		setIsInvalidGuess(false)

		if (currentBoxIdx - 1 >= 0) setCurrentBoxIdx(currentBoxIdx - 1)

	}

	const onCharKey = (value: string) => {
		const updatedGuess = setCharAt(currentGuess, currentBoxIdx, value)
		setCurrentGuess(updatedGuess)
		setIsInvalidGuess(false)

		if (currentBoxIdx + 1 < WORD_LENGTH) setCurrentBoxIdx(currentBoxIdx + 1)
	}

	useEffect(() => {
		const keyboardListener = (e: KeyboardEvent) => {
			if (e.code === 'Enter') {
				onEnterKey()
			} else if (e.code === 'Backspace') {
				onDeleteKey()
			} else {
				const key = e.key.toLowerCase()
				if (key.length === 1 && ALPHABET.includes(key.toUpperCase())) {
					onCharKey(key)
				}
			}
		}
		window.addEventListener('keyup', keyboardListener)
		return () => {
			window.removeEventListener('keyup', keyboardListener)
		}
	}, [onEnterKey, onDeleteKey, onCharKey])

	return (
		<div className="App">
			<header className="App-header">
				<WordledHeader />
			</header>
			<div className="App-body">
				<Grid guesses={guesses} currentGuess={currentGuess} currentBoxIdx={currentBoxIdx} isActiveGuessInvalid={isInvalidGuess} />
				<span style={{ marginTop: '20px' }}>
					{isGameWon && 'Congratulations! You managed to solve the wordled.'}
					{isGameLost && 'Unlucky! You did not manage to solve the wordled.'}
				</span>
			</div>
		</div>
	)}

export default App
