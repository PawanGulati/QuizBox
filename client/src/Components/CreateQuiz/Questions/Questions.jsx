import React, { useState, useEffect } from 'react'
import Question from './Question'
import DialogEditor from '../../TinyMCE/DialogEditor'

import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

// Actually there is one BUG init if we refresh the page in between of creating a quiz we have to start from start making ques

// state => no_of_unsub_ques,ques_submitted 
// dispatch => (save) : {createQues}, (next) : {dec_no_of_sub}

// no_of_unsub_ques -> 1 : {next <-> submit}
// no_of_unsub_ques -> 0 : {<Redirect />}
// ques_submitted -> true : {ticks goes (green)}

import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {createStructuredSelector} from 'reselect'
import {selectCurQuiz, selectQuizzes} from '../../../store/quiz/quiz.selector'
import {set_question, createQues, getMyQuestions, updateQues} from '../../../store/question/question.action'
import { selectCurQues, selectQuestions } from '../../../store/question/question.selector'

const mapStateToProps = createStructuredSelector({
    currQuestion:selectCurQues,
    questions:selectQuestions
})

const mapDispatchToProps = dispatch =>({
    set_question : ques => dispatch(set_question(ques)),
    createQues: (quizID,data) => dispatch(createQues(quizID,data)),
    updateQues:(quizID,quesID,data)=>dispatch(updateQues(quizID,quesID,data)),
    getMyQuestions : (quizID)=>dispatch(getMyQuestions(quizID))
})

export default connect(mapStateToProps,mapDispatchToProps) (function Questions(props) {
    
    const {
        questions,
        getMyQuestions,
        quiz:{_id,no_of_questions},
        set_question,
        createQues,
        updateQues,
        currQuestion
    } = props

    // const [no_of_unsub_ques,set_unsub_ques] = useState(no_of_questions)
    
    const [open, setOpen] = React.useState(false);

    const handleOpenEditor = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    // console.log(no_of_unsub_ques);


    const handleNextClick = () =>{
        // set_unsub_ques(no_of_unsub_ques - 1);
        // set_ques_submitted(false)
    
        // dispatch(createQues)
        createQues(_id,currQuestion)
    }

    // no_of_unsub_ques === 0 ? <Redirect to='/dashboard'/> : null


    return (
        <>
            <Grid container>
                <Grid item xs={12}>
                    <Typography variant='h4' align='left' style={{margin:'3rem 0'}}>Create Questions </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Question  handleOpenEditor={handleOpenEditor} questions={questions}/>
                </Grid>
                <Grid item xs={12} style={{margin:'2em 0 0 0'}}>
                    <Button 
                        variant='contained' 
                        color='primary'
                        onClick={()=>handleNextClick()}
                        disabled = {true}
                    >
                        Submit Quiz
                    </Button>
                </Grid>
            </Grid>
            <DialogEditor 
                id={_id} 
                getMyQuestions={getMyQuestions} 
                createQues={createQues} 
                handleClose={handleClose} 
                open={open} 
                questions={questions}
                updateQues={updateQues}
                set_question={set_question}
                no_of_questions={no_of_questions}
                />
        </>
    )
})


