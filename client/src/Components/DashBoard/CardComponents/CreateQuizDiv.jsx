import React from 'react'
import {makeStyles, Typography, Divider, Button } from '@material-ui/core'
import CreateIcon from '@material-ui/icons/Create';

const useStyles = makeStyles(theme=>({
    root:{
        display:'flex',
        flexDirection:'column',
        height:'100%',
        width:'100%',
    },
    title:{
        color:'white',
        textAlign:'left'
    }
}))

export default function CreateQuizDiv({history,match}) {
    const classes = useStyles()
    
    return (
        <div className={classes.root}>
        <Typography component="h2" variant="h6" className={classes.title} gutterBottom>
            Create Quiz
        </Typography>
        <Divider />
        <Button
            color='secondary'
            variant='contained'
            startIcon={<CreateIcon style={{fontSize:'1.5em'}}/>}
            style={{height:'30%',marginTop:'4em'}}
            onClick={()=>{history.push(`${match.url}/quiz`)}}
        >Go Create</Button>        

        </div>
    )
}
