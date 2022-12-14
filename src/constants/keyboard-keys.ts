export const KEYBOARD_KEYS = [
	['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
	['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
	['Z', 'X', 'C', 'V', 'B', 'N', 'M', 'BACKSPACE', 'ENTER']  
]

export const MAX_KEYBOARD_ROW_LENGTH = Math.max(...KEYBOARD_KEYS.map((row) => row.length))
