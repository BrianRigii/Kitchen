function getREC() {
  const fetch = require("node-fetch");
  console.log(`starting recipe requestss`);


fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
    .then(data => data.json())
    .then(Recipe => console.log(Recipe))
}
module.exports = getREC;
