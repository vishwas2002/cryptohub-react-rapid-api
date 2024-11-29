import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoNewsHeaders = {
    'x-rapidapi-key': '2c6928be0bmsh18f1b02b839fc66p1e01b5jsnfda5b0c374bf',
		'x-rapidapi-host': 'crypto-news16.p.rapidapi.com'
}
const baseUrl = "https://crypto-news16.p.rapidapi.com"
const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
      getCryptoNews: builder.query({
        query: (newsCategory,count) => createRequest(`/news/all?keyword=${newsCategory}&page=0&size=${count}`),
      }),
  
     
    }),
  });

  export const {useGetCryptoNewsQuery} = cryptoNewsApi;
  