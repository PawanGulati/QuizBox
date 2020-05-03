import {combineReducers} from 'redux' 

import storage from 'redux-persist/lib/storage'
import {persistReducer} from 'redux-persist'

import {userReducer} from './user/user.reducer'
import { quizReducer } from './quiz/quiz.reducer'
import { questionReducer } from './question/question.reducer'

// configuring persis store
const persistConfig = {
    key: 'root',
    storage,
    whiteList:['cart']
}

const rootReducer = combineReducers({
    user:userReducer,
    quiz:quizReducer,
    ques:questionReducer
})

export default persistReducer(persistConfig,rootReducer)