import React, { FC } from 'react'
import {ArrowRightSquare, Backspace} from 'react-bootstrap-icons'
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

	const keySymbol = keyValue === 'BACKSPACE' ? <Backspace size={18} /> : (
		keyValue === 'ENTER' ? <ArrowRightSquare size={18} /> : keyValue
	)

	return (
		<button style={{minWidth: '30px', minHeight: '45px', backgroundColor, border: 'none', borderRadius: '3px', color: 'white', fontSize: '15px', textAlign: 'center'}} onClick={() => onClick(keyValue)}>
			{keySymbol}
		</button>
	)
}

export default KeyboardKey