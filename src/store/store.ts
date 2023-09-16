import { combineReducers, configureStore, } from '@reduxjs/toolkit';
import authReducer from './reducers/authReducer';
import { dataAPI } from '../service/UserService';

export const rootReducer = combineReducers({
        authReducer,
        [dataAPI.reducerPath]: dataAPI.reducer
});


export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(dataAPI.middleware)
    })
}
export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']