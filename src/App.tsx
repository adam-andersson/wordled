import React, { useEffect, useState } from 'react'
import './App.css'
import Grid from './components/Grid'
import WordledHeader from './components/WordledHeader'
import { ANSWER } from './constants/answer'
import { NUMBER_OF_GUESSES, WORD_LENGTH } from './constants/guesses'
import { ALPHABET, WORDS } from './constants/word-list'
import { setCharAt } from './helpers/set-char-at'
import Div100vh from 'react-div-100vh'

const App = () => {
	const [currentGuess, setCurrentGuess] = useState('     ')
	const [currentBoxIdx, setCurrentBoxIdx] = useState<number>(0)
	const [guesses, setGuesses] = useState<string[]>([])
	const [isInvalidGuess, setIsInvalidGuess] = useState<boolean>(false)
	const [isGameLost, setIsGameLost] = useState<boolean>(false)
	const [isGameWon, setIsGameWon] = useState<boolean>(false)

	const checkWinLoseCondition = () => {
		if (guesses[guesses.length - 1] === ANSWER) {
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

	useEffect(() => {
		if (!(isGameWon || isGameLost)) window.addEventListener('keyup', keyboardListener)
		else window.removeEventListener('keyup', keyboardListener)
		return () => {
			window.removeEventListener('keyup', keyboardListener)
		}
	}, [onEnterKey, onDeleteKey, onCharKey])


	return (
		<Div100vh style={{backgroundColor: '#282c34', overflow: 'scroll'}}>
			<header className="App-header">
				<WordledHeader />
			</header>
			<div className="App-body">
				<Grid guesses={guesses} currentGuess={currentGuess} currentBoxIdx={currentBoxIdx} isActiveGuessInvalid={isInvalidGuess} />
				{(isGameWon || isGameLost) && 
					<span style={{ marginTop: '20px', fontSize: '15px'}}>
						{isGameWon ? 
							<span>Congratulations! You managed to solve the wordled.</span> : 
							<span>Unlucky! You did not manage to solve the wordled.
								<br />The correct word was: <b>{ANSWER.toUpperCase()}</b></span>}
					</span>
				}
			</div>
		</Div100vh>
	)}

export default App
