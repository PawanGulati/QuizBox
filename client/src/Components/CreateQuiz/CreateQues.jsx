import React, { useEffect, useState } from 'react'

import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {selectCurQuiz} from '../../store/quiz/quiz.selector'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import {makeStyles, Paper} from '@material-ui/core'

import CheckCircleTwoToneIcon from '@material-ui/icons/CheckCircleTwoTone';
import CreateTwoToneIcon from '@material-ui/icons/CreateTwoTone';
import DeleteForeverTwoToneIcon from '@material-ui/icons/DeleteForeverTwoTone';
import Questions from './Questions/Questions'
import {getMyQuestions} from '../../store/question/question.action'

const useStyles = makeStyles(theme=>({
    root:{
        height:'100%',
        overflowY:'auto'
    },
    appBarSpacer: theme.mixins.toolbar,
    quiz_name:{
        fontFamily:'\'Montserrat\', sans-serif'
    },
    paper:{
        backgroundColor:theme.palette.secondary.main,
        color:'#ffffff',
        textAlign:'center',
        padding:'1em 0',
        margin:'2rem 0'
    },
}))

const mapStateToProps = createStructuredSelector({
    current_quiz:selectCurQuiz
})

export default connect(mapStateToProps)(function CreateQues({current_quiz,dispatch}) {
    const classes = useStyles()

    const {alloted_time,name,marks,no_of_questions} = current_quiz

    useEffect(()=>{
        console.log(dispatch);
        
        dispatch(getMyQuestions(current_quiz._id))
    },[])

    // const [no_of_unsub_ques,set_unsub_ques] = useState(no_of_questions)

    return (
        <div className={classes.root}>
            <div className={classes.appBarSpacer} />    
            <Grid container style={{padding:'1em 2em',overflowY:'auto'}}>
                <Grid item xs={12}>
                    <Typography variant='h2' className={classes.quiz_name}>{name}</Typography>
                </Grid>
                <Grid item sm={4} style={{padding:'0 5em'}}>
                    <Paper className={classes.paper}><Typography>Marks :{marks}</Typography></Paper>
                </Grid>
                <Grid item sm={4} style={{padding:'0 5em'}}>
                    <Paper className={classes.paper}><Typography>No. of Questions :{no_of_questions}</Typography></Paper>
                </Grid>
                <Grid item sm={4} style={{padding:'0 5em'}}>
                    <Paper className={classes.paper}><Typography>Alloted Time :{alloted_time}</Typography></Paper>
                </Grid>
                <Questions quiz={current_quiz}/>
            </Grid>
        </div>
    )
})
