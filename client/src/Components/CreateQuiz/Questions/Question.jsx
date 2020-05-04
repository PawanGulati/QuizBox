import React from 'react'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import {makeStyles, Paper} from '@material-ui/core'

import CheckCircleTwoToneIcon from '@material-ui/icons/CheckCircleTwoTone';
import CreateTwoToneIcon from '@material-ui/icons/CreateTwoTone';
import DeleteForeverTwoToneIcon from '@material-ui/icons/DeleteForeverTwoTone';

const useStyles = makeStyles(theme=>({
    quiz_name:{
        fontFamily:'\'Montserrat\', sans-serif'
    },
    ques_paper:{
        backgroundColor:theme.palette.primary.main,
        color:'#ffffff',
        display:'flex',
        justifyContent:'space-between',
        margin:'2em 3em',
        height:'50px',
        position:'relative',
        alignItems:'center',
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


export default function Question({ques_sub,handleOpenEditor}) {
    const classes = useStyles()

    return (
        <Grid container>
            <Grid item sm={6}>
                <Paper className={classes.ques_paper}>
                    <Typography variant='h4' style={{paddingLeft:'2em'}} className={classes.quiz_name}>Create Question</Typography>
                    <CheckCircleTwoToneIcon 
                        style={{fontSize:'3.5em',position:'absolute',right:0}}
                        className={ques_sub ? classes.go_green : null}
                    />
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
            <Grid item sm={6} className={classes.create_icon}>
                <DeleteForeverTwoToneIcon fontSize='large' style={{margin:'1em',cursor:'pointer'}}/>
                <Typography variant='h4' >DELETE </Typography>
            </Grid>
            <Grid item sm={6}>
                <Paper className={classes.ques_paper}>
                    <Typography variant='h4' style={{paddingLeft:'2em'}} className={classes.quiz_name}>Create Option</Typography>
                    <CheckCircleTwoToneIcon 
                        style={{fontSize:'3.5em',position:'absolute',right:0}}
                        className={ques_sub ? classes.go_green : null}
                    />
                </Paper>
            </Grid>
        </Grid>
    )
}
