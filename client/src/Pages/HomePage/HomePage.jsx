import React, { Component } from 'react'
import {ReactComponent as HomeImg} from '../../assets/Images/quiz.svg'

import classes from './HomePage.module.css'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import  Button  from '@material-ui/core/Button'
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import { Divider } from '@material-ui/core'

export default class HomePage extends Component {
    render() {
        return (
            <div className={classes.root}>
                <section>
                    <Grid container>
                        <Grid item xs={12} sm={6} className={classes.leftPane}>
                            <div className={classes.leftpane_main_div}>
                                <Typography style={{fontSize:'1.5rem',fontStyle:'italic'}}>MY tutor247's </Typography>    
                                <div className={classes.quiz_box_title}>
                                    <Typography style={{fontSize:'7em',letterSpacing:'.3em'}}>
                                        Quiz
                                    </Typography>
                                    <Typography style={{fontSize:'7em',letterSpacing:'.3em'}}>
                                        Box
                                    </Typography>
                                    <Typography style={{marginBottom:'2rem'}}>India's No.1 platform for creating and managing <em>Quizzezzz</em></Typography>
                                    <Button 
                                        variant='contained' 
                                        color='primary' 
                                        startIcon={<VpnKeyIcon style={{fontSize:'1.7em'}}/>} 
                                        className={classes.login_button}
                                        onClick={()=>this.props.history.push('/login')}
                                    > 
                                        Login to Continue
                                    </Button>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={6} className={classes.rightPane}>
                            <HomeImg 
                                style={{
                                    height:'70%',
                                    width:'80%',
                                    margin:'3rem'
                                }}
                            />
                        </Grid>
                    </Grid>                    
                </section>
            </div>
        )
    }
}
