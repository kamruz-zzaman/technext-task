import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios'
// Slice

const getAllData = createSlice({
    name: 'rockets',
    initialState: {
        data: []
    },
    reducers: {
        startLoading: state => {
            state.isLoading = true;
        },
        getRockets: (state, action) => {
            state.rockets = action.payload;
            state.isLoading = false;
        },
    },
});

export default getAllData;


const { getRockets, startLoading } = getAllData.actions
export const fetchData = () => async dispatch => {
    dispatch(startLoading())
    try {
        await axios.get('https://api.spacexdata.com/v3/launches')
            .then((response) => dispatch(getRockets(response.data)))
    }
    catch (e) {
        return console.error(e.message);
    }
}