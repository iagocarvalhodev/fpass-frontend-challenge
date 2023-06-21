import axios from 'axios';
import md5 from 'md5';

const time = Number(new Date());
const publickey = '22b173d25530272f12058a2dcacb3dc8';
const privateKey = '2ae5d5c7dd149c1927af5ef8c3f7ab2c395c0a30';

export const axiosInstance = axios.create({
  baseURL: 'https://gateway.marvel.com/v1/public',
  params: {
    limit: 100,
    ts: time,
    apikey: '22b173d25530272f12058a2dcacb3dc8',
    hash: md5(time + privateKey + publickey)
  }
});
