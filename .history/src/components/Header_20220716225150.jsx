import {useState, useContext} from 'react'

const Header = (props) => {
	const [darkMode, setDarkMode] = useState(false)

	const changeMode=() => {
		//setDarkMode(true)
		setDarkMode(!darkMode)
	}


	return (
		<div className="Header">
			<h1>{props.title}</h1>
			<button type="button" onClick={changeMode}>{darkMode? 'Dark mode' :'lightMode'}</button>
		</div>
	)
}

export default Header;