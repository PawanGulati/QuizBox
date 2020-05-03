import React from 'react'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {selectCurrentUser} from '../../store/user/user.selector'

import {makeStyles, CssBaseline} from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';


import {Link} from 'react-router-dom'
import ListItems  from '../DashBoard/listItems';

const drawerWidth = 240;

const useStyles = makeStyles(theme=>({
    root:{
        display:'flex'
    },
    link:{
        margin:'.5em'
    },
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
      },
      toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
      },
      appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
      },
      appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
      menuButton: {
        marginRight: 36,
      },
      menuButtonHidden: {
        display: 'none',
      },
      title: {
        flexGrow: 1,
        fontFamily:'\'Barlow\', sans-serif',
        fontSize:'2em',
        letterSpacing:'1em',
        wordSpacing:'1em',
        marginLeft:'2em'

      },
      drawerPaper: {
        backgroundColor:theme.palette.primary.main,
        color:'#ffffff',
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
      drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      },
}))

const mapStateToProps = createStructuredSelector({
  current_user:selectCurrentUser
})

export default connect(mapStateToProps)(({current_user}) => {
    const classes = useStyles()

    const [open, setOpen] = React.useState(false);
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
            <Toolbar className={classes.toolbar}>
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
                >
                    <MenuIcon />
                </IconButton>
                <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                    QUIZ BOX
                </Typography>
                <div style={{display:'flex',alignItems:'center'}}>
                  {current_user ? <Typography component="h6" variant="h6" color="inherit" noWrap style={{ fontSize:'1.2em',marginRight:'.5em'}}>
                    {`Welcome, ${current_user.userName.split('')[0].toUpperCase() + current_user.userName.slice(1)}`} 
                  </Typography> : null}
                  <IconButton color="inherit">
                      <Badge badgeContent={4} color="secondary">
                      <NotificationsIcon />
                      </Badge>
                  </IconButton>
                </div>
            </Toolbar>
        </AppBar>
        <Drawer
            variant="permanent"
            classes={{
                paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
            }}
            open={open}
        >
            <div className={classes.toolbarIcon}>
            <IconButton onClick={handleDrawerClose}>
                <ChevronLeftIcon style={{color:'white'}}/>
            </IconButton>
            </div>
            <Divider />
            <List><ListItems/></List>
        </Drawer>
        </div>
    )
})
