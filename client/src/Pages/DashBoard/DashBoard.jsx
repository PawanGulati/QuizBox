import React, { Component, useEffect } from 'react'
import { Route, Switch, Redirect } from 'react-router'
import DashBoardCards from '../../Components/DashBoard/DashBoardCards'
import CreateQuiz from '../CreateQuiz/CreateQuiz'

import classes from './DashBoard.module.css'
import { connect } from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {selectCurrentUser} from '../../store/user/user.selector'
import MyQuizzes from '../../Components/ShowQuiz/MyQuizzes'

const mapStateToProps = createStructuredSelector({
    current_user:selectCurrentUser
})

export default connect(mapStateToProps)(class DashBoard extends Component {
    render() {
        const {match,current_user} = this.props

        return (
            <div className={classes.root} style={{overflowY:'auto'}}>
                {!current_user ? <Redirect to='/login?xoxo' /> : null}
                <Switch>
                    <Route exact path={`${match.url}`} component={DashBoardCards}/>
                    <Route path={`${match.url}/quiz`} component={CreateQuiz}/>
                    <Route exact path={`${match.url}/quizzes`} component={MyQuizzes}/>
                </Switch>
            </div>
        )
    }
})
