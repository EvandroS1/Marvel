import md5 from 'md5';
import axios from 'axios';
  
  const API_BASE_URL = 'https://gateway.marvel.com/v1/public';
  const PRIVATE_KEY= '8a341c4e0af12cfaba2a76ba82a2635dc8aedbab';
  const PUBLIC_KEY= '802207b8b666888bab323db04d2dd0f3';
  
  const getTimeStamp = () => Date.now().toString();
  const getHash = (timeStamp: string) => md5(timeStamp+PRIVATE_KEY+PUBLIC_KEY);
  const timeStamp = getTimeStamp();
  
  const hash = getHash(timeStamp);
  
  const query = `ts=${timeStamp}&apikey=${PUBLIC_KEY}&hash=${hash}`;
  
  const url = `${API_BASE_URL}/characters?offset=0&limit=100&${query}`;
  const baseURL = `${API_BASE_URL}`;
  // const searchUrl = `/characters?nameStartsWith=${inputValue}&${query}`
  
  const api = axios.create({
    baseURL: url,
  });
  const baseUrl = axios.create({
    baseURL: baseURL,
  });
  
export const queryy = query
export { api, baseUrl};
