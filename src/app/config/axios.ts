import axios from 'axios';
import md5 from 'md5';

const time = Number(new Date());
const publickey = process.env.API_KEY as string;
const privateKey = process.env.PRIVATE_KEY as string;

export const axiosInstance = axios.create({
  baseURL: 'https://gateway.marvel.com/v1/public',
  params: {
    limit: 100,
    ts: time,
    apikey: '22b173d25530272f12058a2dcacb3dc8',
    hash: md5(time + privateKey + publickey)
  }
});
