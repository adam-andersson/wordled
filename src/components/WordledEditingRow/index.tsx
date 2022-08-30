import React, { FC, useEffect, useRef, useState } from 'react'
import WordledEditingBox from '../WordledEditingBox'

const ALPHABET = [
	'A',
	'B',
	'C',
	'D',
	'E',
	'F',
	'G',
	'H',
	'I',
	'J',
	'K',
	'L',
	'M',
	'N',
	'O',
	'P',
	'Q',
	'R',
	'S',
	'T',
	'U',
	'V',
	'W',
	'X',
	'Y',
	'Z',
]

const WordledEditingRow: FC<{
  // eslint-disable-next-line no-unused-vars
  setNewGuess: (a: string[]) => void;
}> = ({ setNewGuess }) => {
	const [currentGuess, setCurrentGuess] = useState(['', '', '', '', ''])
	const [editingBoxIdx, setEditingBoxIdx] = useState<number>(0)
	const idxStateRef = useRef(editingBoxIdx)
	const guessStateRef = useRef(currentGuess)

	const isValidGuess = currentGuess.every((char) => ALPHABET.includes(char))

	const detectKeyDown = (e: KeyboardEvent) => {
		const keyPressed = e.key.toUpperCase()
		const currentBox = idxStateRef.current

		if (ALPHABET.includes(keyPressed)) {
			const updatedGuess = [...guessStateRef.current]
			updatedGuess[currentBox] = keyPressed
			setCurrentGuess(updatedGuess)
			if (currentBox + 1 < 5) {
				setEditingBoxIdx(currentBox + 1)
				idxStateRef.current = currentBox + 1
				guessStateRef.current = updatedGuess
			}
		} else if (keyPressed === 'BACKSPACE') {
			const updatedGuess = [...guessStateRef.current]
			updatedGuess[currentBox] = ''
			setCurrentGuess(updatedGuess)
			if (currentBox - 1 >= 0) {
				setEditingBoxIdx(currentBox - 1)
				idxStateRef.current = currentBox - 1
				guessStateRef.current = updatedGuess
			}
		}
	}
	useEffect(() => {
		document.addEventListener('keydown', detectKeyDown, true)
		return () => {
			document.removeEventListener('keydown', detectKeyDown)
		}
	}, [])

	const handleSetEditingBox = (newBoxIdx: number) => {
		setEditingBoxIdx(newBoxIdx)
		idxStateRef.current = newBoxIdx
	}

	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'space-between',
				gap: '20px',
			}}
		>
			{/** Invisible div just for spacing */}
			<div style={{ width: '100px' }} />
			<div style={{ display: 'flex', gap: '10px' }}>
				{currentGuess.map((char, i) => {
					const isEditedBox = editingBoxIdx === i
					const updateEditingBox = () => handleSetEditingBox(i)
					return (
						<WordledEditingBox
							character={char}
							setEditingBox={updateEditingBox}
							active={isEditedBox}
							key={`${Math.random()}${i.toString()}`}
						/>
					)
				})}
			</div>
			<div
				style={{
					width: '100px',
					height: '100%',
					display: 'flex',
					alignItems: 'center',
				}}
			>
				{isValidGuess && (
					<button
						type="button"
						style={{
							height: '50%',
							width: '50%',
							backgroundColor: 'rgb(64,64,64)',
							border: 'none',
							borderRadius: '10px',
							fontSize: '20px',
						}}
						onClick={() => setNewGuess(currentGuess)}
					>
						{'>'}
					</button>
				)}
			</div>
		</div>
	)
}
export default WordledEditingRow
