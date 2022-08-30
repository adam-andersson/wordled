import React, { FC } from 'react'

const WordledBox: FC<{
  character: string;
  correctness: 0 | 1 | 2;
}> = ({ character, correctness }) => {
	const backgroundColor =
    correctness === 2 ? 'rgb(27, 163, 156)' : 'rgb(64,64,64)'
	return (
		<div
			style={{
				width: '80px',
				height: '80px',
				backgroundColor,
				marginRight: '5px',
				marginLeft: '5px',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				borderRadius: '10px',
			}}
		>
			{character}
		</div>
	)
}

export default WordledBox
