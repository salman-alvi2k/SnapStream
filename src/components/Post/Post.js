import React from 'react';
import { Avatar } from '@mui/material';
import './Post.css';

function Post() {
    return (
        <div className="Post">
            <div className  = 'Post_Avatar_Header'>
            <Avatar className='Post_Avatar'
            alt="username"
            src="/static/images.avatar/1.png"
            />
            <h3>Username</h3> 
            </div>
            <img className='Post_Image'
                src="https://images.unsplash.com/photo-1445964047600-cdbdb873673d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixid=MnwxfDB8MXxyYW5kb218MHx8d2FsbHBhcGVyLGxhbmRzY2FwZXx8fHx8fDE2NTY4NTAwNzg&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1920"
                alt="Google"
            />
            <h4 className='Post_Caption'><strong>Username</strong> Caption</h4>

        </div>
    )
}

export default Post