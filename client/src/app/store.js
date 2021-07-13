import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

export const store = createStore(rootReducer, applyMiddleware(thunk))
