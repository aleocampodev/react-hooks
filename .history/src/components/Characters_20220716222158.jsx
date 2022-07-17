import React, { useEffect, useState } from 'react'

const  Characters = () => {
	const[characters, setCharacters] = useState([])

	useEffect(() => {
		fetch('https://rickandmortyapi.com/api/character/')
	},[])

	return (
		<div className='Characters'>hola</div>
	)
}

export default Characters