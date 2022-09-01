import React, { FC, useState } from 'react'
import {Backdrop, Box, Modal, Fade, Typography} from '@mui/material'

const style = {
	position: 'absolute' as const,
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: '60%',
	bgcolor: 'rgb(64,64,64)',
	color: 'white',
	border: '2px solid rgb(32,32,32)',
	boxShadow: 24,
	p: 4,
}

type Props = {
    isWin: boolean,
    answer: string
}

const WinLoseModal: FC<Props> = ({isWin, answer}) => {
	const [open, setOpen] = useState(true)
	const handleClose = () => setOpen(false)

	return (
		<Modal
			aria-labelledby="transition-modal-title"
			aria-describedby="transition-modal-description"
			open={open}
			onClose={handleClose}
			closeAfterTransition
			BackdropComponent={Backdrop}
			BackdropProps={{
				timeout: 500,
			}}
		>
			<Fade in={open}>
				<Box sx={style}>
					<Typography id="transition-modal-title" variant="h6" component="h2">
						{isWin ? 'Congratulations!' : 'Unlucky!'}
					</Typography>
					<Typography id="transition-modal-description" sx={{ mt: 2 }}>
						{isWin ? 'You managed to solve the wordled. Reload the page to play again.' : `You did not manage to solve the wordled. The answer was ${answer}. Reload the page to play again.`}
					</Typography>
				</Box>
			</Fade>
		</Modal>
	)
}

export default WinLoseModal