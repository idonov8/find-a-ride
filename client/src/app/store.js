import { createStore, applyMiddleware, compose } from '@reduxjs/toolkit'
import rootReducer from '../reducers/index'
import thunk from 'redux-thunk'

export const store = createStore(rootReducer, compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f=>f ))
