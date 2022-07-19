import React from "react";


export const themes = {
	light: {
	  foreground: '#000000',
	  background: '#eeeeee'
	},
	dark: {
	  foreground: '#FA8072',
	  background: '#222222'
	}
  };
  
const ThemeContext = React.createContext(themes.light);
  
export default ThemeContext;



