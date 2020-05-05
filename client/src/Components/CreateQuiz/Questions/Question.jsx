import React from 'react'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import {makeStyles, Paper} from '@material-ui/core'

import CheckCircleTwoToneIcon from '@material-ui/icons/CheckCircleTwoTone';
import CreateTwoToneIcon from '@material-ui/icons/CreateTwoTone';
import DeleteForeverTwoToneIcon from '@material-ui/icons/DeleteForeverTwoTone';

const useStyles = makeStyles(theme=>({
    quiz_name:{
        fontFamily:'\'Montserrat\', sans-serif',
        width:'100%',
    },
    quiz_name_ques:{
        margin:'1.5em 0'
    },
    ques_paper:{
        backgroundColor:theme.palette.primary.main,
        color:'#ffffff',
        display:'flex',
        flexDirection:'column',
        // margin:'2em 3em',
        height:'100%',
        padding:'1em',
        // position:'relative',
    },
    create_icon:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
    },
    go_green:{
        color:theme.palette.secondary.main
    }
}))


export default function Question({ques_sub,handleOpenEditor,questions}) {
    const classes = useStyles()

    return (
        <Grid container style={{height:'15rem'}}>
            <Grid item sm={6} style={{height:'100%',padding:'2em'}}>
                <Paper className={classes.ques_paper}>
                    <Typography variant='h4' className={classes.quiz_name}>Start Creating Questions</Typography>
                    <div style={{display:'flex',flexDirection:'column',justifyContent:'start'}}>
                        <Typography variant='h5' className={classes.quiz_name_ques}>Questions Submitted : {questions.length}</Typography>
                    </div>
                </Paper>
            </Grid>
            <Grid item sm={6} className={classes.create_icon}>
                <CreateTwoToneIcon fontSize='large' style={{margin:'1em'}}/>
                <Typography 
                    variant='h4' 
                    style={{cursor:'pointer'}}
                    onClick={()=>handleOpenEditor()}
                >
                    CREATE / EDIT
                </Typography>
            </Grid>

        </Grid>
    )
}
