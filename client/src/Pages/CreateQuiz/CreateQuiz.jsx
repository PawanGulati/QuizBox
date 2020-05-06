import React, { Component, useState } from 'react'
import { Grid, TextField ,makeStyles, Button, Paper} from '@material-ui/core'
import CreateIcon from '@material-ui/icons/Create';

import CreateQuizPre from '../../Components/CreateQuiz/CreateQuizPre'

import {Switch,Route} from 'react-router-dom'
import CreateQues from '../../Components/CreateQuiz/CreateQues';
import QuizView from '../../Components/ShowQuiz/QuizView';

const useStyles = makeStyles(theme=>({
    root:{
        height:'100%'
    }
}))


export default function CreateQuiz(props) {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Switch>
                <Route exact path={props.match.url} render={(props)=><CreateQuizPre {...props}/>}/>
                <Route exact path={`${props.match.url}/new`} component={CreateQues}/>
                <Route exact path={`${props.match.url}/:id`} component={QuizView}/>
            </Switch>
        </div>
    )
}
