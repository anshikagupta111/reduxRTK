import { configureStore } from '@reduxjs/toolkit'
import appSlice from './slices/appSlice'
import { setupListeners } from '@reduxjs/toolkit/query'
import pokemonReducer from './slices/appSlice'
const store=configureStore({
    reducer:{
        pokemon:pokemonReducer
    }    
})
setupListeners(store.dispatch)
export default store