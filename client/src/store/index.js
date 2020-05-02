import {createStore,applyMiddleware,compose} from 'redux'

import logger from 'redux-logger'
import thunk from 'redux-thunk'

import rootReducer from './rootReducer'

// All middleware goes here 
const middlewares = [thunk]
if(process.env.NODE_ENV !=='production'){
    middlewares.push(logger)
}

// Adding chrome REDUX dev tool functionality as middleware
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(rootReducer,composeEnhancers(applyMiddleware(...middlewares)))
