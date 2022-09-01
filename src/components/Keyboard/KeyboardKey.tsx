import React, { FC } from 'react'
import {ArrowRightSquare, Backspace} from 'react-bootstrap-icons'
import { MAX_KEYBOARD_ROW_LENGTH } from '../../constants/keyboard-keys'
import { getBoxColor } from '../../helpers/get-box-color'
import { CharStatus } from '../../lib/word-logic'
import './Keyboard.scss'

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

	return (
		<button className="keyboard__button" style={{backgroundColor, maxWidth}} onClick={() => onClick(keyValue)}>
			{keySymbol}
		</button>
	)
}

export default KeyboardKey