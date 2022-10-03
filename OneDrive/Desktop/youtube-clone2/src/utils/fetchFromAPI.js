import axios from 'axios';

// API 
const apiURL = 'https://youtube-v31.p.rapidapi.com';
const options = {
  params: {
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};



// Create async function to make api call destructure the data and return it 
export const fetchFromAPI = async ( url ) => {
    const { data } = await axios.get( `${ apiURL }/${ url }` , options);
    return data;
}
