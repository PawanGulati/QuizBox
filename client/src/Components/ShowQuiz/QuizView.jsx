import React, { useEffect } from 'react'
import  Grid from '@material-ui/core/Grid'
import {makeStyles, Paper, Typography} from '@material-ui/core'

import ReactHtmlParser from 'react-html-parser'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { getMyQuestions } from '../../store/question/question.action'
import { selectQuestions } from '../../store/question/question.selector'


const useStyles = makeStyles(theme =>({
    paperQues:{ 
        height:'100%',
        width:'100%',
        backgroundColor:theme.palette.primary.main,
        color:'#ffffff',
        padding:'1em',
        margin:'0 1em'
    },
    paperOpt:{
        height:'100%',
        // width:'100%',
        backgroundColor:theme.palette.secondary.main,
        color:'#ffffff',
        padding:'1em'
    },
    paperOptAnswer:{
        height:'100%',
        // width:'100%',
        backgroundColor:'green',
        color:'#ffffff',
        padding:'1em'
    },
    grid_ques:{
        // height:'200px',
        padding:'1rem',
        display:'flex',
        alignItems:'center'
    },  
    grid_opt:{
        padding:'0 1em'
    },
    appBarSpacer: theme.mixins.toolbar,
}))

const mapStateToProps = createStructuredSelector({
    questions:selectQuestions
})

export default connect(mapStateToProps)(function QuizView({dispatch,match,history,questions}) {
    useEffect(()=>{
        try {
            dispatch(getMyQuestions(match.params.id))
        } catch (error) {
            history.goBack()
        }
    },[])

    const classes = useStyles()

    const answerClassStyling = (option,answer) =>{
        if(option === answer)
            return classes.paperOptAnswer
     
        return classes.paperOpt
    }
    
    return (
        <div>
            <div className={classes.appBarSpacer} />
            {
                questions.map((ques,idx) =>(
                    <div style={{padding:'1rem'}}>
                    <Grid item xs={12} className={classes.grid_ques} >
                        <Typography variant='h4'>{idx+1}</Typography>
                        <Paper className={classes.paperQues}>
                            {ReactHtmlParser(ques.question)}
                        </Paper>
                    </Grid>
                    <div style={{display:'flex',flexDirection:'column'}}>
                        <div style={{display:'flex',padding:'1rem'}}>
                        <Grid item xs={12} sm={6} className={classes.grid_opt}>
                            <Paper className={answerClassStyling(ques.options[0],ques.answer)}>
                                {ReactHtmlParser(ques.options[0])}
                            </Paper>
                        </Grid>
                        <Grid item xs={12} sm={6} className={classes.grid_opt}>
                            <Paper className={answerClassStyling(ques.options[1],ques.answer)}>
                                {ReactHtmlParser(ques.options[1])}
                            </Paper>
                        </Grid>
                        </div>
                        <div style={{display:'flex',padding:'1rem'}}>
                        <Grid item xs={12} sm={6} className={classes.grid_opt}>
                            <Paper className={answerClassStyling(ques.options[2],ques.answer)}>
                                {ReactHtmlParser(ques.options[2])}
                            </Paper>
                        </Grid>
                        <Grid item xs={12} sm={6} className={classes.grid_opt}>
                            <Paper className={answerClassStyling(ques.options[3],ques.answer)}>
                                {ReactHtmlParser(ques.options[3])}
                            </Paper>
                        </Grid>
                        </div>
                    </div>
                    </div>
                ))
            }  
        </div>
    )
})
