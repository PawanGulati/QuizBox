import React from 'react'

import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {selectCurQuiz} from '../../store/quiz/quiz.selector'

const mapStateToProps = createStructuredSelector({
    current_quiz:selectCurQuiz
})

export default connect(mapStateToProps)(function CreateQues({current_quiz}) {
    return (
        <div>
            
        </div>
    )
})
