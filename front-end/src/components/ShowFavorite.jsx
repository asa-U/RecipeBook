import React, { useState } from 'react';
import '../styles/ShowFavorite.css';
import FavoriteCard from './FavoriteCard.jsx';

const ShowFavorite = () => {
    const [allRecipes, setAllRecipes] = useState([])

    const handleGetAllFavorite = async() => {
        const response = await fetch("http://localhost:8001/favorite")
        const data = await response.json()
        setAllRecipes(data)
        console.log(data)
    }

    return (
        <div className='showfavorite--container'>
            <div className='showbox'>
            <h3>Show All My Favorite</h3>
            <button className='favorite-button' onClick={handleGetAllFavorite}>Show me</button>
            </div>
            <div className='showfavorite'>
                {allRecipes 
                ? allRecipes.map((recipe) => (
                <FavoriteCard
                key={recipe.idMeal}
                recipe={recipe}
                />
                ))
                : "Sorry... no recipes!"}
            </div>    
        </div>
    )
}


export default ShowFavorite