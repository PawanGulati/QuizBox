import React, { Component, useState } from 'react'
import { Grid, TextField ,makeStyles, Button, Paper} from '@material-ui/core'
import CreateIcon from '@material-ui/icons/Create';
import Snackbar  from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

import {connect} from 'react-redux'
import { createQuiz, quiz_err_comp_close, quiz_fail } from '../../store/quiz/quiz.action';
import { createStructuredSelector } from 'reselect';
import { selectQuizErrCompOpen,selectQuizError } from '../../store/quiz/quiz.selector';


function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}  

const useStyles = makeStyles(theme=>({
    leftPane:{
        height:'100%',
        padding:'6rem 5rem',
        display:'flex',
        flexWrap:'wrap',
        alignContent:'space-between',
    },
    rightPane:{
        height:'100%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        
    },
    rightPaneDiv:{
        height:'30rem',
        width:'100%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        padding:'5rem 4rem',
        borderLeft:'6px solid #5F4B8B'
    },
    Button:{
        height:'10rem',
        width:'30rem',
        fontSize:'3em',
        fontFamily:'\'Barlow\', sans-serif'
    },
    appBarSpacer: theme.mixins.toolbar,
}))

const mapDispatchToProps = dispatch =>({
    createQuiz: data =>dispatch(createQuiz(data)),
    quiz_err_comp_close: ()=>dispatch(quiz_err_comp_close()),
    quiz_fail:()=>dispatch(quiz_fail())
})

const mapStateToProps = createStructuredSelector({
    open_err_comp:selectQuizErrCompOpen,
    quiz_error:selectQuizError
})

export default connect(mapStateToProps,mapDispatchToProps)(function CreateQuizPre(props) {
    const [inputs, setInputs] = useState({name:'',marks:10,no_of_questions:1,alloted_time:10});
    
    const inputChangeHandler = ({target:{value,name}}) =>{
        setInputs({...inputs,[name]:value})
    }

    const createQuizHandler = async () =>{
        try{
            const quiz = await props.createQuiz(inputs)
            if(quiz)
                props.history.push(`${props.match.url}/new`)
        }catch(error){
            props.quiz_fail({message:error.message})
        }
    }

    // Error Snackbar implementation
    const error = props.quiz_error && (
        <Snackbar open={props.open_err_comp} autoHideDuration={3000} onClose={props.quiz_err_comp_close}>
        <Alert onClose={props.quiz_err_comp_close} severity="warning">
            {props.quiz_error}
        </Alert>
        </Snackbar>
    )

    const classes = useStyles()

    return (
        <div style={{height:'100%'}}>
            {error}
            <div className={classes.appBarSpacer} />
            <Grid container style={{height:'calc(100% - 71px)'}}>
                <Grid item xs={12} sm={6} className={classes.leftPane}>
                    <TextField 
                        variant="filled"
                        margin="normal"
                        required
                        fullWidth
                        id="name"
                        label="Quiz Name"
                        name="name"
                        value={inputs.name}
                        autoComplete="off"
                        autoFocus
                        onChange={inputChangeHandler}
                        style={{
                            fontSize:'5em',
                            color:'white'
                        }}
                    />
                    <TextField 
                        variant="filled"
                        margin="normal"
                        required
                        fullWidth
                        id="marks"
                        label="Total Marks"
                        name="marks"
                        value={inputs.marks}
                        autoComplete="off"
                        onChange={inputChangeHandler}
                    />
                    <TextField 
                        variant="filled"
                        margin="normal"
                        required
                        fullWidth
                        id="alloted_time"
                        label="Time Alloted (in minutes)"
                        name="alloted_time"
                        value={inputs.alloted_time}
                        autoComplete="off"
                        onChange={inputChangeHandler}
                    />
                    <TextField 
                        variant="filled"
                        margin="normal"
                        required
                        fullWidth
                        id="no_of_questions"
                        label="Total no of Questions"
                        name="no_of_questions"
                        value={inputs.no_of_questions}
                        autoComplete="off"
                        onChange={inputChangeHandler}
                    />
                </Grid>
                <Grid item xs={12} sm={6} className={classes.rightPane}>
                    <div className={classes.rightPaneDiv}>
                        <Button 
                            variant='contained' 
                            color='primary' 
                            size='large' 
                            className={classes.Button}
                            startIcon={<CreateIcon style={{fontSize:'1em'}}/>}
                            onClick={()=>createQuizHandler()}
                        >CREATE QUIZ</Button>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
})
