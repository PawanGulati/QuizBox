import React, { Component } from 'react'
import ToolBar from '../../Components/ToolBar/ToolBar'

import classes from './Layout.module.css'

export default class Layout extends Component {
    render() {
        return (
            <div className={classes.root}>
                <ToolBar />
                {this.props.children}
            </div>
        )
    }
}
