import React, { useState, useEffect } from 'react'
import {makeStyles, Typography, Button } from '@material-ui/core'
import VisibilityIcon from '@material-ui/icons/Visibility';

// FOR FUN
import CountUp from 'react-countup';

const useStyles = makeStyles(theme=>({
    root:{
        display:'flex',
        flexDirection:'column',
        height:'100%',
        width:'100%',
    },
    title:{
        color:'white'
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

export default function TotalQuizDiv() {
    const classes = useStyles()

    const [TotalQuiz,setTotalQuiz] = useState(10)

    return (
        <div className={classes.root}>
        <Typography component="h2" variant="h6" className={classes.title} gutterBottom>
            Total Quizzes
        </Typography>
        <div className={classes.QuizNumDiv}>
            <Typography component="h1" variant="h2" className={classes.QuizNum}>
                <CountUp 
                    start={0}
                    end={TotalQuiz}
                    duration={4}
                />
            </Typography>
            <Button
                color='secondary'
                variant='contained' 
                startIcon={<VisibilityIcon style={{fontSize:'2em'}}/>}
                style={{height:'40%',width:'40%',margin:'2em'}}
            >
                My Quizzes
            </Button>
        </div>

        </div>
    )
}
