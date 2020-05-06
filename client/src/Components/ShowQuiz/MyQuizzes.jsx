import React from 'react'

import {makeStyles, Typography, Paper, Divider} from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import VisibilityIcon from '@material-ui/icons/Visibility';
import CreateIcon from '@material-ui/icons/Create';

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectQuizzes } from '../../store/quiz/quiz.selector'
import {Link} from 'react-router-dom'

const useStyles = makeStyles(theme=>({
    root:{
        height:'100%',
        display:'flex',
        flexDirection:'column'
    },
    appBarSpacer: theme.mixins.toolbar,
    quiz_grid:{
        height:'300px',
        padding:'1em'
    },
    paper:{
        height:'100%',
        width:'100%',
        backgroundColor:theme.palette.primary.main,
        color:'#ffffff',
        display:'flex',
        flexDirection:'column',
        // justifyContent:'center',
        alignItems:'center'
    },
    quiz_name:{
        fontFamily:'\'Barlow\', Cursive ',
        fontSize:'3em',
        flex:1,
        textAlign:'center'
    },
    quiz_content:{
        width:'100%',
        height:'100%'
    },
    quiz_content_title:{
        fontFamily:'\'Montserrat\', Cursive',
        fontWeight:600,
        display:'flex',
        justifyContent:'space-between',
        padding:'0 3em',
        margin:'1em 0',
        '&:nth-child(2n + 1)':{
            // justifyContent:'space-around',
            // well you can do some shit here to make it look funky
        }
    }
}))

const mapStateToProps = createStructuredSelector({
    quizzes:selectQuizzes
})

export default connect(mapStateToProps)(function MyQuizzes({quizzes}) {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <div className={classes.appBarSpacer} />
            <Container style={{padding:'2rem 3rem'}}>
                <Grid container>
                    {!quizzes.length?(
                        <Grid item xs={12}>
                            <Typography variant='h1'>Bummer! No Quiz Created </Typography>
                        </Grid>  
                    ):(
                        quizzes.map(quiz =>(
                            <Grid key={quiz._id} item xs={12} sm={6} className={classes.quiz_grid}>
                                <Paper className={classes.paper}>
                                    <div style={{display:'flex',alignItems:'center',width:'100%',padding:'0 1em'}}>
                                        <Link to={`quiz/${quiz._id}`} ><VisibilityIcon fontSize='large' /></Link>
                                        <Typography className={classes.quiz_name}>{quiz.name}</Typography>
                                        <Link to={`quiz/${quiz._id}`} ><CreateIcon fontSize='large' /></Link>
                                    </div>
                                    <Divider style={{border:'.5px solid white',width:'100%'}}/>
                                    <div className={classes.quiz_content}>
                                        <Typography className={classes.quiz_content_title} variant='h5'>Marks <div>{quiz.marks}</div></Typography>
                                        <Typography className={classes.quiz_content_title} variant='h5'>Time Alloted <div>{quiz.alloted_time}</div></Typography>
                                        <Typography className={classes.quiz_content_title} variant='h5'>No of Question <div>{quiz.no_of_questions}</div></Typography>
                                    </div>
                                </Paper>
                            </Grid>
                        ))
                    )
                    }
                </Grid>
            </Container>
        </div>
    )
})
