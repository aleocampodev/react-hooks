import {useState, useContext} from 'react'
import ThemeContext from '../context/ThemeContext'

const Header = (props) => {
	const [darkMode, setDarkMode] = useState(false)
	const color = useContext(ThemeContext)

	const changeMode=() => {
		//setDarkMode(true)
		setDarkMode(!darkMode)
	}


	return (
		<div className="Header">
			<h1 style={{color}}>{props.title}</h1>
			<button type="button" onClick={changeMode}>{darkMode? 'Dark mode' :'lightMode'}</button>
		</div>
	)
}

export default Header;