import React, { useEffect, useState } from 'react';
import '../styles.css';


const  Characters = () => {
	const[characters, setCharacters] = useState([])

	useEffect(() => {
		fetch('https://rickandmortyapi.com/api/character/')
		.then(response => response.json())
		.then(data => setCharacters(data.results))
	},[])

	console.log(characters,"holi ")

	return (
		<div className='characters'>
			{characters.map((character) => (
				<div key={character.id} className="character">
					<img src={character.image} alt={character.name}/>
					<h2 >{character.name}</h2>
				</div>
				
			))}
		</div>
	)
}

export default Characters