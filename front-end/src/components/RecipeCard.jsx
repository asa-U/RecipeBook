import React from 'react';

const recipeCard = ({ recipe }) => {
    const {idMeal, strMeal, strCategory, strMealThumb} = recipe;

    return (
        <div className='recipecard--container'>
            <img
                src={strMealThumb}
                alt={strMeal}
                className='recipecard--image'
            />
            <div className='recipecard--body'>
                <span className='category'>{strCategory}</span>
                <h3>{strMeal}</h3>
                <a href={"https://www.themealdb.com/meal/" + idMeal} target='_blank'>Ingredints</a>
            </div>
        </div>
    )
};

export default recipeCard;
