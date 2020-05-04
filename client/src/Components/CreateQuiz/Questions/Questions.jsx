import React, { useState } from 'react'
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
import {selectCurQuiz} from '../../../store/quiz/quiz.selector'
import {set_question, createQues} from '../../../store/question/question.action'
import { selectCurQues } from '../../../store/question/question.selector'

const mapStateToProps = createStructuredSelector({
    quiz:selectCurQuiz,
    currQuestion:selectCurQues
})

const mapDispatchToProps = dispatch =>({
    set_question : ques => dispatch(set_question(ques)),
    createQues: (quizID,data) => dispatch(createQues(quizID,data))
})

export default connect(mapStateToProps,mapDispatchToProps) (function Questions({quiz:{_id,no_of_questions},set_question,createQues,currQuestion}) {
    const [no_of_unsub_ques,set_unsub_ques] = useState(no_of_questions)
    const [ques_submitted,set_ques_submitted] = useState(false)
    const [open, setOpen] = React.useState(false);

    const handleOpenEditor = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    // console.log(no_of_unsub_ques);

    const handleSubmitQues = (question) =>{
        set_ques_submitted(true)
        setOpen(false);

        // dispatch(setQues)
        set_question(question)
        // console.log(question);
        
    }

    const handleNextClick = () =>{
        set_unsub_ques(no_of_unsub_ques - 1);
        set_ques_submitted(false)
    
        // dispatch(createQues)
        createQues(_id,currQuestion)
    }

    return (
        <>
            {no_of_unsub_ques === 0 ? <Redirect to='/dashboard'/> : null}
            <Grid container>
                <Grid item xs={12}>
                    <Typography variant='h4' align='left' style={{margin:'3rem 0'}}>Question {no_of_questions - no_of_unsub_ques + 1}</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Question ques_sub={ques_submitted} handleOpenEditor={handleOpenEditor}/>
                </Grid>
                <Grid item xs={12} style={{margin:'2em 0'}}>
                    <Button 
                        variant='contained' 
                        color='primary' 
                        onClick={()=>handleNextClick()}
                        disabled={!ques_submitted}
                    >
                        Submit {no_of_unsub_ques === 1 ? 'QUIZ':'this Question'}
                    </Button>
                </Grid>
            </Grid>
            <DialogEditor handleClose={handleClose} open={open} handleSubmitQues={handleSubmitQues}/>
        </>
    )
})
