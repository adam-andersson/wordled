import React from 'react'
import './App.css'
import WordledHeader from './components/WordledHeader'
import WordledTable from './components/WordledTable.tsx'

const App = () => (
	<div className="App">
		<header className="App-header">
			<WordledHeader />
			<WordledTable />
		</header>
	</div>
)

export default App
