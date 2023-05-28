import React from 'react';
import '../styles/FavoriteCard.css';

const FavoriteCard = ({ recipe }) => {
    const {idMeal, strMeal, strCategory, strMealThumb} = recipe;

    return (
        <div className='recipes'>
        <div className='favoritecard--container'>
            <img
                src={strMealThumb}
                alt={strMeal}
                className='favoritecard--image'
            />
            <div className='favoritecard--body'>
                <span className='category'>{strCategory}</span>
                <h3>{strMeal}</h3>
                <a href={"https://www.themealdb.com/meal/" + idMeal} target='_blank'>Ingredints</a>
            </div>
        </div>
        </div>
    )
};

export default FavoriteCard;
