import { createSlice } from '@reduxjs/toolkit';
import initialState from '../initialState';

export const statusesListSlice = createSlice({
    name: 'statusesList',
    initialState: initialState.statusesList,

    reducers: {
        addStatuses: (state, action) => {
            const statusesList = action.payload;
            state = statusesList; // eslint-disable-line

            return state;
        },

    },
});

export const { addStatuses } = statusesListSlice.actions;

export const selectStatusesList = (state) => (state.statusesList);

export default statusesListSlice.reducer;