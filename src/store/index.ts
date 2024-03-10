import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './reducer';
import axiosInstance from '../services/axios.service';

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({
      thunk: {
        extraArgument: axiosInstance,
      }
    })

});