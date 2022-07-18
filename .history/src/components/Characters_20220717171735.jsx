import React, { useEffect, useState , useReducer} from 'react'

const initialState = {
	favorites:[]
}

const favoriteReducer= (state,action) => {
	switch(action.type){
		case 'ADD_TO_FAVORITE':
			return {
				...state,
				favorites:[...state.favorites, action.payload]
			}
		default:
			return state;
	}
}
const  Characters = () => {
	const[characters, setCharacters] = useState([])
	const [favorites,dispatch ] = useReducer(favoriteReducer,initialState)

	useEffect(() => {
		fetch('https://rickandmortyapi.com/api/character/')
		.then(response => response.json())
		.then(data => setCharacters(data.results))
	},[])

	return (
		<div className='Characters'>
			{characters.map((character) => (
				<h2>{character.name}</h2>
			))}
		</div>
	)
}

export default Characters