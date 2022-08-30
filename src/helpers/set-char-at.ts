export const setCharAt = (originalString: string, index: number, newChar: string) => {
	if (index > originalString.length - 1) return originalString
	return originalString.substring(0, index) + newChar + originalString.substring(index + 1)
}