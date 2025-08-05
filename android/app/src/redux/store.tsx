import { configureStore } from '@reduxjs/toolkit'
import appSlice from './appSlice'
import { setupListeners } from '@reduxjs/toolkit/query'
const store=configureStore({
    reducer:{
        [appSlice.reducerPath]:appSlice.reducer},
    
    middleware:(getDefaultMiddleware)=>
        getDefaultMiddleware().concat(appSlice.middleware)
})
setupListeners(store.dispatch)
export default store