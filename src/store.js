import { configureStore } from '@reduxjs/toolkit'
import getAllData from './Slice/getAllData';


const reducer = getAllData.reducer

const store = configureStore({
    reducer
})

export default store;