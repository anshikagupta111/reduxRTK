// import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";
//  const appSlice=createApi({
//     reducerPath:'pokemonApi',
//     baseQuery:fetchBaseQuery({baseUrl:'https://pokeapi.co/api/v2/'}),
//     endpoints:(build)=>({
//         getPokemonList:build.query({
//             query:()=>`pokemon?limit=20`,
//         })
//     })
// })
// export const {useGetPokemonListQuery}=appSlice
// export default appSlice;


import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
export const fetchPokemonNames=createAsyncThunk('pokemon/fetchNames',
    async()=>{
        const res=await fetch('https://pokeapi.co/api/v2/pokemon?limit=30')
        const data=await res.json()
        return data.results
    }
)
export const appSlice=createSlice({
    name:'pokemon',
    initialState:{
        names:[],
        loading:false,
        error:null
    },
    extraReducers:(builder)=>{
        builder
        .addCase(fetchPokemonNames.pending,(state)=>{
            state.loading=true;
            state.error=null;
        })
        .addCase(fetchPokemonNames.fulfilled,(state,action)=>{
            state.loading=false;
            state.names=action.payload;
        })
        .addCase(fetchPokemonNames.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
    })
    }
    })
export default appSlice.reducer