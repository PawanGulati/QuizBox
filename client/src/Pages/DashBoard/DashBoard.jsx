import React, { Component } from 'react'
import { Route, Switch } from 'react-router'
import DashBoardCards from '../../Components/DashBoard/DashBoardCards'
import CreateQuiz from '../CreateQuiz/CreateQuiz'

import classes from './DashBoard.module.css'

export default class DashBoard extends Component {
    render() {
        const {match} = this.props
        
        return (
            <div className={classes.root}>
                <Switch>
                    <Route exact path={`${match.url}`} component={DashBoardCards}/>
                    <Route exact path={`${match.url}/quiz`} component={CreateQuiz}/>
                </Switch>
            </div>
        )
    }
}
