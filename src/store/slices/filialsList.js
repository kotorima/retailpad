import { createSlice } from '@reduxjs/toolkit';
import initialState from '../initialState';

export const filialsListSlice = createSlice({
    name: 'filialsList',
    initialState: initialState.filialsList,

    reducers: { /* eslint-disable-next-line */
        addFilials: (state, action) => {
            const filialsList = action.payload
                /* eslint-disable-next-line */
            state = filialsList;

            return state
        },

    },
});

export const { addFilials } = filialsListSlice.actions;

export const selectFilialsList = (state) => (state.filialsList);

export default filialsListSlice.reducer;