const correctWord = 'PASTA'
const correctWordArr = correctWord.split('')

const getCorrectPosition = (word: string[]) =>
	word.map((char, i) => {
		if (char === correctWordArr[i]) return 2
		return 0
	})

export default getCorrectPosition
