const url = 'https://restcountries.com/v3/all' // countries api
const fetchData = async () => {
  try {
    const response = await fetch(url)
    const countries = await response.json()
    console.log(countries)
  } catch (err) {
    console.log(err)
  }
}
console.log('===== async and await')
fetchData()
//wrong happens
// const countriesAPI = 'https://restcountries.eu/rest/v2/all'
// const API_URL = 'https://restcountries.eu/rest/v2/all'