import React, { FC } from 'react'
import { ANSWER } from '../../constants/answer'
import { KEYBOARD_KEYS } from '../../constants/keyboard-keys'
import { getGuessesStatuses } from '../../lib/word-logic'
import KeyboardKey from './KeyboardKey'

type Props = {
    guesses: string[]
    onEnterKey: () => void
    onDeleteKey: () => void
    onCharKey: (value: string) => void
}

const Keyboard: FC<Props> = ({
	guesses,
	onEnterKey,
	onDeleteKey,
	onCharKey,
}) => {
	const charStatuses = getGuessesStatuses(ANSWER, guesses)

	const onKeyboardPress = (value: string) => {
		if (value === 'ENTER') {
			onEnterKey()
		} else if (value === 'BACKSPACE') {
			onDeleteKey()
		} else {
			onCharKey(value)
		}
	}

	return (
		<div style={{display: 'flex', flexDirection: 'column', gap: '5px', marginTop: '30px', marginBottom: '20px'}}>
			{KEYBOARD_KEYS.map((keyboardRow) => <div style={{display:'flex', justifyContent: 'center', gap: '5px'}} key={keyboardRow.join()}>
				{keyboardRow.map((keyboardKey) => <KeyboardKey keyValue={keyboardKey} onClick={onKeyboardPress} keyStatus={charStatuses[keyboardKey.toLowerCase()]} key={keyboardKey}/>)}
			</div>)}
		</div>
	)
}

export default Keyboard