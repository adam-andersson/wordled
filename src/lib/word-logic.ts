import { SOLUTION, WORDS } from '../constants/word-list'

export type CharStatus = 'absent' | 'present' | 'correct'

export const isWordInWordList = (word: string) => {
	return WORDS.includes(word.toLowerCase())
}
  
export const isCorrectWord = (word: string) => {
	return SOLUTION === word.toLowerCase()
}

export const getGuessesStatuses = (
	solution: string,
	guesses: string[]
): { [key: string]: CharStatus } => {
	const charObj: { [key: string]: CharStatus } = {}
	const splitSolution = solution.split('')

	guesses.forEach((word) => {
		word.split('').forEach((letter, i) => {
			if (!splitSolution.includes(letter)) {
				return (charObj[letter] = 'absent')
			}

			if (letter === splitSolution[i]) {
				return (charObj[letter] = 'correct')
			}

			if (charObj[letter] !== 'correct') {
				return (charObj[letter] = 'present')
			}
		})
	})

	return charObj
}

export const getGuessStatuses = (
	solution: string,
	guess: string
): CharStatus[] => {
	const splitSolution = solution.split('')
	const splitGuess = guess.split('')

	const solutionCharsUsed = splitSolution.map(() => false)

	const statuses: CharStatus[] = Array.from(Array(guess.length))

	splitGuess.forEach((letter, i) => {
		if (letter === splitSolution[i]) {
			statuses[i] = 'correct'
			solutionCharsUsed[i] = true
			return
		}
	})

	splitGuess.forEach((letter, i) => {
		if (statuses[i]) return

		if (!splitSolution.includes(letter)) {
			statuses[i] = 'absent'
			return
		}

		const indexOfPresentChar = splitSolution.findIndex(
			(x, index) => x === letter && !solutionCharsUsed[index]
		)

		if (indexOfPresentChar > -1) {
			statuses[i] = 'present'
			solutionCharsUsed[indexOfPresentChar] = true
			return
		} else {
			statuses[i] = 'absent'
			return
		}
	})

	return statuses
}


