import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://restcountries.com/v3.1',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getCountries(perPage,page) {
    return apiClient.get('/all?_limit=' + perPage + '&_page=' + page)
  }
}
