import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";
 const appSlice=createApi({
    reducerPath:'pokemonApi',
    baseQuery:fetchBaseQuery({baseUrl:'https://pokeapi.co/api/v2/'}),
    endpoints:(build)=>({
        getPokemonList:build.query({
            query:()=>`pokemon?limit=10`,
        })
    })
})
export const {useGetPokemonListQuery}=appSlice
export default appSlice;