import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';



const cryptoApiHeaders = {
  'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
  'x-rapidapi-key': '2c6928be0bmsh18f1b02b839fc66p1e01b5jsnfda5b0c374bf',
};
const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl: "https://coinranking1.p.rapidapi.com" }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),
    getCryptoDetails:builder.query({
           query : (coinId) => createRequest(`/coin/${coinId}`)
    }),
    getCryptoHistory:builder.query({
           query : ({coinId, timePeriod}) => createRequest(`coin/${coinId}/history?timeperiod=${timePeriod}`)
    }),
    getExchanges: builder.query({
      query: () => createRequest('/exchanges'),
    }),
   
  }),
});

export const {
  useGetCryptosQuery,
   useGetCryptoDetailsQuery,
   useGetCryptoHistoryQuery,
   useGetExchangesQuery,
} = cryptoApi;