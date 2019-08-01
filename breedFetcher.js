const request = require("request");

const breed = process.argv.splice(2);
const link = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

request(link, (error, response, body) => {
  if (error) {
    return console.log('There was an error!');
  }
  const data = JSON.parse(body);
  if (!data[0]) {
    console.log(`Could not retrieve information about ${breed}. Please try a different breed.`);
  } else {
    console.log(data[0].description);
  }
});
