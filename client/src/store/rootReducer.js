import {combineReducers} from 'redux' 

import {userReducer} from './user/user.reducer'
import { quizReducer } from './quiz/quiz.reducer'
import { questionReducer } from './question/question.reducer'


const rootReducer = combineReducers({
    user:userReducer,
    quiz:quizReducer,
    ques:questionReducer
})

export default rootReducer