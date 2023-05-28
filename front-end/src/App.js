import React, { useState } from 'react';
import './styles/App.css';
import RecipeCard from './components/RecipeCard';
import SearchBar from './components/SearchBar';
import Register from './components/Register';
import LogIn from './components/LogIn';
import GetFavorite from './components/GetFavorite';
import ShowFavorite from './components/ShowFavorite';

const apiUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

const App = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [showRegister, setRegister] = useState(false)
  const [showLogIn, setLogIn] = useState(false)
  const [isLogIn, setIsLogIn] = useState(false)
  const [username, setUserName] = useState("")
  const [userId, setUserId] = useState("")
  
  
  //search for the recipe
  const searchRecipes = async() => {
    setIsLoading(true);
    const url = apiUrl + query;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    setRecipes(data.meals);
    setIsLoading(false);
  }

  /*useEffect (() => {
    searchRecipes();
  }, []);*/

  function toggleShowLogin() {
    setLogIn(!showLogIn)
  }
  
  function toggleRegister() {
    setRegister(!showRegister)
  }

  function toggleLogIn() {
    setIsLogIn(!isLogIn)
  }

  function getUserName(name) {
    setUserName(name);
  } 

  function getUserId(id) {
    setUserId(id);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    searchRecipes()  
  };
    
  const handleQueryChange = (event) => {
    setQuery(event.target.value);
  };

  return (
  <>
  <header>
    <Register className='register--container' toggleRegister={toggleRegister} />
    <LogIn classname='login--container'
    toggleLogIn={toggleLogIn} getUserName={getUserName} getUserId={getUserId} toggleShowLogin={toggleShowLogin} 
    />
  </header>
    <div className='container'>
      <h2>Recipe Book</h2>
      <GetFavorite recipes={recipes} />
      <ShowFavorite />
      <SearchBar
        handleSubmit={handleSubmit}
        value={query}
        onChange={handleQueryChange}
        isLoading={isLoading}
      />
      <div className='recipes'>
        {recipes 
        ? recipes.map((recipe) => (
          <RecipeCard
          key={recipe.idMeal}
          recipe={recipe}
          />
        ))
        : "Sorry... no recipes!"}
      </div>
    </div>
  </>  
  );
}

export default App