const request = require("request");

const fetchBreedDescription = function(breedname, callback) {

  const link = `https://api.thecatapi.com/v1/breeds/search?q=${breedname}`;

  request(link, (error, response, body) => {
    const data = JSON.parse(body);
    if (data[0]) {
      return callback(error, data[0].description.trim());
    } else {
      return callback("Can't find the breed name!");
    }
  });

};

module.exports = { fetchBreedDescription };


