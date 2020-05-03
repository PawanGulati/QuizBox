import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import BarChartIcon from '@material-ui/icons/BarChart';
import InfoIcon from '@material-ui/icons/Info';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import {createStructuredSelector} from 'reselect'
import {selectCurrentUser} from '../../store/user/user.selector'
import { logout } from '../../store/user/user.action';

const mapStateToProps = createStructuredSelector({
  current_user:selectCurrentUser
})

const mapDispatchToProps = dispatch =>({
  logout: () => dispatch(logout())
})

export default connect(mapStateToProps,mapDispatchToProps)(function ListItems({current_user,logout}){
  return <div>
    <ListItem button>
      <ListItemIcon>
      <Link to='/dashboard'><DashboardIcon /></Link>
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem button>
        <ListItemIcon>
        <Link to='/dashboard'><QuestionAnswerIcon /></Link>
        </ListItemIcon>
        <ListItemText primary="Chat Now" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>{
      current_user ? <Link to='/' onClick={()=>logout()}><ExitToAppIcon /></Link> : <Link to='/login'><VpnKeyIcon /></Link>
      }
      </ListItemIcon>
      {current_user ? <ListItemText primary="Logout" /> : <ListItemText primary="Login" />}
    </ListItem>
    <ListItem button>
      <ListItemIcon>
      <Link to='/dashboard'><InfoIcon /></Link>
      </ListItemIcon>
      <ListItemText primary="About Us" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
      <Link to='/dashboard'><ContactSupportIcon /></Link>
      </ListItemIcon>
      <ListItemText primary="Contact Us" />
    </ListItem>
  </div>
})