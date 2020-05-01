import React from 'react';
import { makeStyles, withStyles, fade } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { Link} from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';


const useStyles = makeStyles(theme=>({
    root:{
        display:'flex',
        flexDirection:'column',
        height:'100%',
        width:'100%',
    },
    title:{
        color:'white'
    },
    table: {
        minWidth: 650,
        backgroundColor:'#fff3f3'
    },
    tableHead:{
        backgroundColor:'grey'
    },
    seeMore: {
        marginTop: theme.spacing(3),
    },
    search:{
        display:'flex',
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        position: 'relative',
        margin:'6px 3px'
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
      },
      inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
          width: '20ch',
        },
      },
}))

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
        },
    },
}))(TableRow);
function createData(rank, name, quiz, marks, totalMarks) {
  return { rank, name, quiz, marks, totalMarks};
}

const rows = [
  createData(1, 'Jay gereek', 'Circular Motion', 240,250),
  createData(2, 'Andy guston', 'Circular Motion', 237, 250),
  createData(3, 'Linda Augston', 'Circular Motion', 224, 250),
  createData(4, 'bialey carger', 'Circular Motion', 167, 250),
];

export default function SimpleTable() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <div style={{display:'flex',justifyContent:'space-between'}}>
            <Typography component="h2" variant="h6" className={classes.title} gutterBottom>
                LeaderBoard
            </Typography>
            <div className={classes.search}>
            <div className={classes.searchIcon}>
            <SearchIcon style={{color:'white'}}/>
            </div>
            <InputBase
            placeholder="Search For Quiz…"
            classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
            }}
            inputProps={{ 'aria-label': 'search' }}
            style={{color:'white'}}
            />
        </div>
        </div>
        <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Rank</StyledTableCell>
              <StyledTableCell align="right">Student's Name</StyledTableCell>
              <StyledTableCell align="right">Quiz Name</StyledTableCell>
              <StyledTableCell align="right">Marks Obtained</StyledTableCell>
              <StyledTableCell align="right">Total Marks</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.rank}
                </StyledTableCell>
                <StyledTableCell align="right">{row.name}</StyledTableCell>
                <StyledTableCell align="right">{row.quiz}</StyledTableCell>
                <StyledTableCell align="right">{row.marks}</StyledTableCell>
                <StyledTableCell align="right">{row.totalMarks}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div className={classes.seeMore}>
        <Link color="primary" to="#" onClick={(e)=>{e.preventDefault()}}>
          See more Rankings
        </Link>
      </div>
    </div>
  );
}