import React from 'react';
import './Post.css';

function Post() {
    return (
        <div>
            <h3>Username</h3>
            <img className='Post_Image'
                src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_light_color_272x92dp.png"
                alt="Google"
            />
            <h4><strong>Caption</strong></h4>

        </div>
    )
}

export default Post