import { CharStatus } from '../lib/word-logic'

export const getBoxColor = (status?: CharStatus, isSelectedBox?: boolean, isActiveGuessInvalid?: boolean) => {
	if (isActiveGuessInvalid) {
		if (isSelectedBox) return 'rgb(138, 50, 55)'
		return 'rgb(163, 59, 27)'
	}
	if (isSelectedBox) return 'rgb(32,32,32)'
	if (status === 'correct') return 'rgb(27, 163, 156)'
	if (status === 'present') return 'rgb(181, 201, 22)'
	if (status === 'absent') return 'rgb(64,64,64)'
	return 'rgb(64,64,64)'
}