import { configureStore } from '@reduxjs/toolkit';
import cityListReducer from './slices/cityList';
import filialsListReducer from './slices/filialsList';
import statusesListReducer from './slices/statusesList';
import notificationsReducer from './slices/notifications'

const store = configureStore({
    reducer: {
        cityList: cityListReducer,
        filialsList: filialsListReducer,
        statusesList: statusesListReducer,
        notifications: notificationsReducer
    },
});

export default store;