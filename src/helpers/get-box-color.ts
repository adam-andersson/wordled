import { CharStatus } from '../lib/word-logic'

export const getBoxColor = (status?: CharStatus, isSelectedBox?: boolean, isActiveGuessInvalid?: boolean) => {
	if (isActiveGuessInvalid) return '#fb6a75'
	if (isSelectedBox) return 'rgb(32,32,32)'
	if (status === 'correct') return '#00c7b7'
	if (status === 'present') return '#f8bc00'
	return 'rgb(64,64,64)'
}