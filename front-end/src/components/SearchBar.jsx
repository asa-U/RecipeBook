import React from 'react';

const searchBar = ({
    value,
    isLoading,
    handleSubmit,
    onChange
}) => {

    /*fetch("http://localhost:8001/myfavorite", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ recipe, userId }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data); 
        })
        .catch((error) => {
          console.error('Error:', error);
        });*/

    return (
        <div className='searchbar--container'>
            <form onSubmit={handleSubmit}>
                <input
                    value={value}
                    disabled={isLoading}
                    onChange={onChange}
                    placeholder='Search Recipes'
                    className='form--control'
                />
                <input 
                    disabled={isLoading || !value}
                    type='submit'
                    className='button'
                    value='Search'
                />
            </form>
        </div>
    )
};

export default searchBar;