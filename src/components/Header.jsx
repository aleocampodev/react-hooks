import { useContext} from 'react'
import ThemeContext,{themes} from '../context/ThemeContext'
import '../styles.css'

const Header = (props) => {
	const { theme, handleChangeTheme } = useContext(ThemeContext);


	return (
		<div className="header">
			<h1 >{props.title}</h1>
			<button type="button" onClick={handleChangeTheme} className="styleButton">{theme === themes.darkMode? 'Dark mode' :'lightMode'}</button>
		</div>
	)
}

export default Header;