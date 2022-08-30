import React, { FC } from 'react'

const WordledEditingBox: FC<{
  character: string;
  active: boolean;
  setEditingBox: () => void;
}> = ({ character, active, setEditingBox }) => {
	const backgroundColor = active ? 'rgb(32,32,32)' : 'rgb(64,64,64)'
	return (
		<div
			style={{
				width: '80px',
				height: '80px',
				backgroundColor,
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				borderRadius: '10px',
			}}
		>
			{!active ? (
				<input
					style={{
						width: '100%',
						height: '100%',
						backgroundColor: 'transparent',
						border: 'none',
					}}
					type="button"
					onClick={setEditingBox}
					value=" "
				/>
			) : (
				<div style={{ marginTop: '35px' }}>---</div>
			)}
			<div style={{ position: 'absolute', alignItems: 'center' }}>
				{character}
			</div>
		</div>
	)
}
export default WordledEditingBox
