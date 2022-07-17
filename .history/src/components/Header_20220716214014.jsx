import React,{useState} from 'react'

const Header = () => {
	const [darkMode, setDarkMode] = useState(false)

	const changeMode=() => {
		//setDarkMode(true)
		setDarkMode(!darkMode)
	}


	return (
		<div className="Header">
			<h1>ReactHooks</h1>
			<button type="button" onClick={changeMode}>{darkMode? 'Dark mode' :'lightMode'}</button>
		</div>
	)
}

export default Header;