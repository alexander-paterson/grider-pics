import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID 17494b1c6ab75a810ff4f65efb6909dae42d1bca0b5ee7255c2b8daffec2f640',
  },
});
