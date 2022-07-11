import { createSlice } from '@reduxjs/toolkit';
import initialState from '../initialState';

export const cityListSlice = createSlice({
    name: 'cityList',
    initialState: initialState.cityList,

    reducers: { /* eslint-disable-next-line */
        addCites: (state, action) => {
            const cityList = action.payload;
            /* eslint-disable-next-line */
            state = cityList;

            return state
        }

    },
});

export const { addCites } = cityListSlice.actions;

export const selectCityList = (state) => (state.cityList);

export default cityListSlice.reducer;