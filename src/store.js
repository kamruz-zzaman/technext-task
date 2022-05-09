import { configureStore } from '@reduxjs/toolkit'
import getAllData from './Slice/getAllData';


const reducer = getAllData.reducer

const store = configureStore(
    {
        reducer: reducer,
        composeEnhancers: window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    }
)

export default store;