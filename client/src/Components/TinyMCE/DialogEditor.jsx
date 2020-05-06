import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import Radio from '@material-ui/core/Radio';
import { green } from '@material-ui/core/colors';
import { Grid, withStyles, Paper } from '@material-ui/core';

import TinyEditor from './TinyEditor';

import ReactHtmlParser from 'react-html-parser'
import { Redirect } from 'react-router';

const useStyles = makeStyles((theme) => ({
  root:{
    backgroundImage: 'linear-gradient(-20deg, #e9defa 0%, #fbfcdb 100%)',
    backgroundColor:'red'
  },
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  radio:{
    display:'flex',
    alignItems:'center',
  },
  radio_title:{
    fontFamily:'\'Barlow\', sans-serif'
  },
  answerOption:{
    border:'1px solid green'
  },
  paperQues:{ 
    height:'100%',
    width:'100%',
    backgroundColor:theme.palette.primary.main,
    color:'#ffffff',
    padding:'1em',
    margin:'0 1em'
  },
  paperOpt:{
    height:'100%',
    // width:'100%',
    backgroundColor:theme.palette.secondary.main,
    color:'#ffffff',
    padding:'1em'
  },
  paperOptAnswer:{
    height:'100%',
    // width:'100%',
    backgroundColor:'green',
    color:'#ffffff',
    padding:'1em'
  },
  grid_ques:{
    // height:'200px',
    padding:'1rem',
    display:'flex',
    alignItems:'center'
  },  
  grid_opt:{
    padding:'0 1em'
  }
}));

const GreenRadio = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog({handleClose,open,questions,id,createQues,updateQues,getMyQuestions,set_question,no_of_questions,history}) {
  const classes = useStyles();
  // some conditional styling 
  const answerClassStyling = (option,answer) =>{
    if(option === answer)
        return classes.paperOptAnswer
 
    return classes.paperOpt
  }
  
  const [question,setQuestion] = useState({Question:'', Option1:'',Option2:'',Option3:'',Option4:'',answer:'Option1'})

  // const [answer, setAnswer] = React.useState('Option1');

  const [ques_submitted,set_ques_submitted] = useState(false)
  
  const [cur_ques_no,set_cur_ques_no] = useState(1)
  

  const handleNextQues = async (id,ques) =>{
    try {
      
      if(cur_ques_no <= no_of_questions){// create ques or update ques
        if(questions.length+1 === cur_ques_no){
          await createQues(id,ques)
          setQuestion({Question:'', Option1:'',Option2:'',Option3:'',Option4:'',answer:'Option1'})
        }
        else{
          await updateQues(id,questions[cur_ques_no-1]._id,ques)  
          // set editor content 
          
          if(questions.length === cur_ques_no){
            setQuestion({Question:'', Option1:'',Option2:'',Option3:'',Option4:'',answer:'Option1'})
          }else{
            const {question,options,answer} = questions[cur_ques_no]
            // some silly stuff ;)
            const answerInOptIdx = options.findIndex(opt => opt === answer)
            setQuestion({Question:question, Option1:options[0],Option2:options[1],Option3:options[2],Option4:options[3],answer:`Option${answerInOptIdx + 1}`})
          }
        }  
        
        // updating new questions array
        getMyQuestions(id)
        // inc curr ques idx
        set_cur_ques_no(cur_ques_no+1)
      }else{
        history.push('/dashboard')
      }

    } catch (error) {
      console.log(error);
    }
}


const handlePrevQues = () =>{
    if(cur_ques_no>1){
      // dec curr ques idx
      set_cur_ques_no(cur_ques_no-1)
      // setQues in state
      set_question(questions[cur_ques_no-2])
      // set editor content 
      const {question,options,answer} = questions[cur_ques_no-2]
      // some silly stuff
      const answerInOptIdx = options.findIndex(opt => opt === answer)
      setQuestion({Question:question, Option1:options[0],Option2:options[1],Option3:options[2],Option4:options[3],answer:`Option${answerInOptIdx + 1}`})
    }
}

  const handleChange = ({target:{value}}) => {
    setQuestion({...question,answer:value})
    // setAnswer(value)
  };

  const handleQuesState = (quesValue) =>{
    
    setQuestion({...question,...quesValue})
        
  }

  const processedQuestionState = () =>{
    const {Question,answer,...options} = question

    let processedQuestion={}
    const processedOption=Object.values({...options})

    processedQuestion={question:Question,options:[...processedOption],answer:question[answer]}

    return processedQuestion

  }

  let quizView
  if(cur_ques_no === no_of_questions+1){
    quizView = (      
      questions.map((ques,idx) =>(
        <div style={{padding:'1rem'}}>
        <Grid item xs={12} className={classes.grid_ques} >
            <Typography variant='h4'>{idx+1}</Typography>
            <Paper className={classes.paperQues}>
                {ReactHtmlParser(ques.question)}
            </Paper>
        </Grid>
        <div style={{display:'flex',flexDirection:'column'}}>
            <div style={{display:'flex',padding:'1rem'}}>
            <Grid item xs={12} sm={6} className={classes.grid_opt}>
                <Paper className={answerClassStyling(ques.options[0],ques.answer)}>
                    {ReactHtmlParser(ques.options[0])}
                </Paper>
            </Grid>
            <Grid item xs={12} sm={6} className={classes.grid_opt}>
                <Paper className={answerClassStyling(ques.options[1],ques.answer)}>
                    {ReactHtmlParser(ques.options[1])}
                </Paper>
            </Grid>
            </div>
            <div style={{display:'flex',padding:'1rem'}}>
            <Grid item xs={12} sm={6} className={classes.grid_opt}>
                <Paper className={answerClassStyling(ques.options[2],ques.answer)}>
                    {ReactHtmlParser(ques.options[2])}
                </Paper>
            </Grid>
            <Grid item xs={12} sm={6} className={classes.grid_opt}>
                <Paper className={answerClassStyling(ques.options[3],ques.answer)}>
                    {ReactHtmlParser(ques.options[3])}
                </Paper>
            </Grid>
            </div>
        </div>
        </div>
    ))
    )
  }else{
    quizView = (
      <>
        <Grid item xs={12} style={{padding:'2rem'}}>
          <TinyEditor question={question} ques_submitted={ques_submitted} type='Question' handleQuesState={handleQuesState}/>
        </Grid>

        <div style={{display:'flex',flexWrap:'wrap'}}>
          <Grid item xs={6} style={{padding:'1em 3em'}}>  
            <div className={classes.radio}>
              <GreenRadio
                  checked={question.answer === 'Option1'}
                  onChange={handleChange}
                  value='Option1'
                  name="Option1"
                  inputProps={{ 'aria-label': 'Option1' }}
                /><Typography className={classes.radio_title}>OPTION-1</Typography>
            </div>
            <TinyEditor question={question} ques_submitted={ques_submitted} type='Option1' handleQuesState={handleQuesState}/>
          </Grid>

          <Grid item xs={6} style={{padding:'1em 3em'}}>
            <div className={classes.radio}>
              <GreenRadio
                checked={question.answer === "Option2"}
                onChange={handleChange}
                value='Option2'
                name="Option2"
                inputProps={{ 'aria-label': 'Option2' }}
              /><Typography className={classes.radio_title}>OPTION-2</Typography>
            </div>
            <TinyEditor question={question} ques_submitted={ques_submitted} type='Option2' handleQuesState={handleQuesState}/>
          </Grid>

          <Grid item xs={6} style={{padding:'1em 3em'}}>
            <div className={classes.radio}>
              <GreenRadio
                checked={question.answer === "Option3"}
                onChange={handleChange}
                value='Option3'
                name="Option3"
                inputProps={{ 'aria-label': 'Option3' }}
              /><Typography className={classes.radio_title}>OPTION-3</Typography>
            </div>
            <TinyEditor question={question} ques_submitted={ques_submitted} type='Option3' handleQuesState={handleQuesState}/>
          </Grid>

          <Grid item xs={6} style={{padding:'1em 3em'}}>
            <div className={classes.radio}>
              <GreenRadio
                checked={question.answer === "Option4"}
                onChange={handleChange}
                value='Option4'
                name="Option4"
                inputProps={{ 'aria-label': 'Option4' }}
              /><Typography className={classes.radio_title}>OPTION-4</Typography>
            </div>
            <TinyEditor question={question} ques_submitted={ques_submitted} type='Option4' handleQuesState={handleQuesState}/>
          </Grid>
        </div>
      </>
    )
  }

  return (
    <div className={classes.root}>
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Create Question And tick Answer
            </Typography>
            <Typography variant="h6" className={classes.title}>
              {cur_ques_no === no_of_questions+1 ? `QUIZ VIEW`:`Question ${cur_ques_no}`}
            </Typography>
            <Button autoFocus color="inherit" onClick={()=>handlePrevQues()}>
              Previous
            </Button>
            <Button autoFocus color="inherit" onClick={()=>handleNextQues(id,processedQuestionState())}>
              {cur_ques_no === no_of_questions+1 ? `Submit Quiz`:`Next`}
            </Button>
          </Toolbar>
        </AppBar>
        {quizView}
      </Dialog>
    </div>
  );
}
