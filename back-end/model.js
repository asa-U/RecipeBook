async function fetchRecipes() {
    try {
      // Fetch data from the recipes API
      const response = await fetch('https://api.spoonacular.com/recipes/1/card');
      const data = await response.json();
      console.log(data);
      //const recipes = data.recipes;
  
      return data;
    } catch (error) {
      console.error('Error fetching recipes:', error);
      throw error;
    }
  }
  
  module.exports = fetchRecipes;