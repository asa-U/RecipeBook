import React from 'react';
import '../styles/GetFavorite.css';

const GetFavorite = ({toggleLogIn, recipes}) => {
    const handleSubmit = async () => {
            await fetch("http://localhost:8001/favorite", {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(recipes),
            })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                alert('recipe stored successful')
            })
            .catch((error) => {
                console.error('Error:', error);
            })
        }
    
    return (
        <div className='myFavorite--container'>
            <h3>Get My Favorite</h3>
            <button className='favorite-button' onClick={handleSubmit}>Like</button>
        </div>
    )
};
  
export default GetFavorite