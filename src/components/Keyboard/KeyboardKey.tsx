import React, { FC } from 'react'
import {ArrowRightSquare, Backspace} from 'react-bootstrap-icons'
import { MAX_KEYBOARD_ROW_LENGTH } from '../../constants/keyboard-keys'
import { getBoxColor } from '../../helpers/get-box-color'
import { CharStatus } from '../../lib/word-logic'

type Props = {
    keyValue: string,
    onClick: (value: string) => void,
    keyStatus?: CharStatus
}

const KeyboardKey: FC<Props> = ({
	keyValue,
	onClick,
	keyStatus
}) => {
	const backgroundColor = getBoxColor(keyStatus)

	const keySymbol = keyValue === 'BACKSPACE' ? <Backspace size={'1em'} /> : (
		keyValue === 'ENTER' ? <ArrowRightSquare size={'1em'} /> : keyValue
	)

	const maxWidth = `${Math.floor(100/MAX_KEYBOARD_ROW_LENGTH - 1) - 1}vw`

	console.log(maxWidth)

	return (
		<button style={{width: '1.5em', maxWidth: maxWidth, minHeight: '3em', backgroundColor, border: 'none', borderRadius: '0.2em', color: 'white', textAlign: 'center', fontSize: 'calc(10px + 1.2vmin)', padding: 'inherit'}} onClick={() => onClick(keyValue)}>
			{keySymbol}
		</button>
	)
}

export default KeyboardKey