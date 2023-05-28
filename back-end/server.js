const express = require("express");
const app = express(); // create express app
const PORT = 8001;
const cors = require("cors");
const bcrypt = require("bcrypt");
const allowedOrigins = ["http://localhost:3000", "https://recipebook-36xr.onrender.com"];

require('dotenv').config();
const Knex = require("knex");
const knexConfig = require("./knexfile");
const knex = Knex(knexConfig[process.env.NODE_ENV || "development"]);

app.use(express.static("public"));
app.use(cors({
  origin: (origin, callback) => {
    // Check if the origin is in the allowed origins array or if it's undefined (for cases like Postman)
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  }
}));
app.use(express.json());

app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
  });

app.get("/", (req, res) => {
    res.send("I am running");
});

/*app.get("/tag", async (req, res,) => {
  try {
      const allTitles = await knex.select("*")
      .from("tag");
      res.send(allTitles);
  }
  catch (error) {
      console.error(error)
      res.status(500).send({message:error})
  }
});

app.get("/tag/:id", async (req, res) => {
  const reqID = parseInt(req.params.id);
  try {
      const selectedTitleId = await knex.select("*")
      .from("tag")
      .where("id", reqID) 
      res.send(selectedTitleId);   
  } 
  catch (error) {
      console.error(error)
      res.status(500).send({message:error})
  }
});*/

//favorite
app.get("/favorite", async (req, res,) => {
  try {
      const myFavoriteRecipes = await knex.select("*")
      .from("favorite");
      res.json(myFavoriteRecipes);
  }
  catch (error) {
      console.error(error)
      res.status(500).send({message:error})
  }
});

app.post("/favorite", async (req, res) => {
  try {
    const recipesArray = req.body;
    console.log(recipesArray)
    await Promise.all(
        recipesArray.map(async (recipe) => {
        let {idMeal, strMeal, strCategory, strMealThumb} = recipe;
        await knex("favorite")
        .insert({idMeal, strMeal, strCategory, strMealThumb});
    })
    );
      res.status(201).send({ message: 'Recipe created successfully' });
  }
  catch (error) {
      console.error(error)
      res.status(500).send({message:error})
  }
});


//register
app.get("/register", async (req, res,) => {
  try {
      const allRegisters = await knex.select("*")
      .from("user");
      res.json(allRegisters);
  }
  catch (error) {
      console.error(error)
      res.status(500).send({message:error})
  }
});

app.post("/register", async (req, res) => {
  try {
      const {username, password} = req.body;
      const hash = await bcrypt.hash(password, 10)
      await knex("user")
      .insert({
          username: username, 
          password: hash})
      res.status(201).send({ message: 'Password hashed successfully' });    
  } 
  catch (error) {
      console.error(error)
      res.status(500).send({message:error})
  }
});

//login
app.post("/login", async (req, res) => {
  try {
      const {username, password} = req.body;
      const user = await knex("user")
      .first("*")
      .where({username: username});
      if (user) {
          const validPassword = await bcrypt.compare(password, user.password);
          if(validPassword) {
              res.status(200).json(user.id);
          } else {
              res.json("Wrong password!");
          }
      } else {
          res.status(404).json("User not found!");
      }        
  } 
  catch (error) {
      console.error(error)
      res.status(500).send({message:error})
  }
});













