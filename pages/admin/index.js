import Layout from '../../components/Layout';
import withAdmin from '../withAdmin';
import Link from 'next/link';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
  }));


const Admin = ({ user }) => (
    
    <Layout>
        <h1>Admin Dashboard</h1>
        <Divider />
        <br />
        <div className="row">
        <List component="nav" aria-label="main mailbox folders" >
        <ListItem button>
            <ListItemIcon>
                <DraftsIcon />
            </ListItemIcon>
            <a href="/admin/category/create" className="nav-link">
                            Create category
                        </a>
            </ListItem>
            <Divider />
            <ListItem button>
            <ListItemIcon>
                <InboxIcon />
            </ListItemIcon>
            <Link href="/admin/category/read">
                            <a className="nav-link">All categories</a>
                        </Link>
            </ListItem>
            <Divider />
            <ListItem button>
            <ListItemIcon>
                <DraftsIcon />
            </ListItemIcon>
            <Link href="/admin/link/read">
                            <a className="nav-link">All Announcement</a>
                        </Link>
            </ListItem>
            <Divider />
            <ListItem button>
            <ListItemIcon>
                <DraftsIcon />
            </ListItemIcon>
            <Link href="/user/profile/update">
                            <a className="nav-link">Profile update</a>
                        </Link>
            </ListItem>
            <Divider />
        </List>
        <Divider />
            
            <div className="col-md-8"></div>
        </div>
    </Layout>
);

export default withAdmin(Admin);
