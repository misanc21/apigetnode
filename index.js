const axios = require('axios');

const url = 'https://jsonmock.hackerrank.com/api/countries/search?name=';

const getSearch = async (s, p = 0) => {
  try {
    const response = await axios.get(`${url}${s}`)
    const countriesPopulation = response.data.data.filter(country => {
      return country.population > p
    }) 
    console.log('Response:', countriesPopulation);
    return countriesPopulation
    
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Call the function
getSearch('united', 100000000);