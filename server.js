const express = require("express");
const app = express();
app.use(express.json())
app.use(express.static("build"))

const pokemons = ["Pikachu", "Bulbasaur", "Charmander", "Squirtle"]

app.get("/api/pokemons", (req, res) => {
  res.send(pokemons)
});

app.post("/api/pokemons", (req, res) => {
  const pokemonName = req.body.name
  //data.id = pokemons.length+1
  pokemons.push(pokemonName)
  res.send(req.body)
})

// After all other routes
app.get('*', (req, res) => {
  res.sendFile('build/index.html');
});

const port = process.env.PORT || 8080
app.listen(port, () => console.log(`listening on port ${port}`))

