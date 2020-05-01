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
import { Link } from 'react-router-dom';

export const ListItems = (
  <div>
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
      <ListItemIcon>
      <Link to='/dashboard'><BarChartIcon /></Link>
      </ListItemIcon>
      <ListItemText primary="Quizzes" />
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
);