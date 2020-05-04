import React, { useEffect } from 'react'
import {makeStyles, Typography, Button, Divider } from '@material-ui/core'
import VisibilityIcon from '@material-ui/icons/Visibility';

// FOR FUN
import CountUp from 'react-countup';

import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect'
import {selectQuizCount} from '../../../store/quiz/quiz.selector'
import { getMyQuizzes } from '../../../store/quiz/quiz.action';


const useStyles = makeStyles(theme=>({
    root:{
        display:'flex',
        flexDirection:'column',
        height:'100%',
        width:'100%',
    },
    title:{
        color:'white',
        textAlign:"left"
    },
    QuizNum:{
        color:'white',
        fontSize:'9em',
        textAlign:'center',
        width:'40%',
        borderRight:'5px solid #ffffff'
    },
    QuizNumDiv:{
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center'
    }
}))

const mapStateToProps = createStructuredSelector({
    totalQuiz:selectQuizCount
})

export default connect(mapStateToProps) (function TotalQuizDiv({totalQuiz,dispatch,history,match}) {
    const classes = useStyles()

    useEffect(()=>{
        dispatch(getMyQuizzes())
    },[])

    return (
        <div className={classes.root}>
            <Typography component="h2" variant="h6" className={classes.title} gutterBottom>
                Total Quizzes
            </Typography>
            <Divider />
            <div className={classes.QuizNumDiv}>
                <Typography component="h1" variant="h2" className={classes.QuizNum}>
                    <CountUp 
                        start={0}
                        end={totalQuiz}
                        duration={4}
                    />
                </Typography>
                <Button
                    color='secondary'
                    variant='contained' 
                    startIcon={<VisibilityIcon style={{fontSize:'2em'}}/>}
                    style={{height:'40%',width:'40%',margin:'2em'}}
                    onClick={()=>{history.push(`${match.url}/quizzes`)}}
                >
                    My Quizzes
                </Button>
            </div>
        </div>
    )
})
