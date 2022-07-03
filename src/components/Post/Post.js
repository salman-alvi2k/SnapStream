import React from 'react';
import { Avatar } from '@mui/material';
import './Post.css';

function Post({username, caption, imageUrl}) {
    return (
        <div className="Post">
            <div className  = 'Post_Avatar_Header'>
            <Avatar className='Post_Avatar'
            alt={username}
            src="/static/images.avatar/1.png"
            />
            <h3>{username}</h3> 
            </div>
            <img className='Post_Image'
                src={imageUrl}
                alt="Google"
            />
            <h4 className='Post_Caption'><strong>{username}</strong> {caption}</h4>

        </div>
    )
}

export default Post