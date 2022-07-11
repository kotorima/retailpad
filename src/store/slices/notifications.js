import { createSlice } from '@reduxjs/toolkit';
import initialState from '../initialState';

export const notificationsSlice = createSlice({
    name: 'notifications',
    initialState: initialState.notifications,

    reducers: {
        enqueueSnackbar: (state, action) => {
            const notificationsList = action.payload;
            state.push(notificationsList);
            return state;
        },

        closeSnackbar: (state, action) => {
            console.log(state, action)
            return state;
        },
        removeSnackbar: (state, action) => {
            console.log(state, action)
            return state;
        },

    },
});

export const { enqueueSnackbar, closeSnackbar, removeSnackbar } = notificationsSlice.actions;

export const useNotifications = (state) => (state.notifications);

export default notificationsSlice.reducer;