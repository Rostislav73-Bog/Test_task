import React from 'react';

const PostItem = (props) => {
    return (
            <div className="post">
                <div>{props.number}
                 {props.post.body}
                </div>
           </div>
    );
};


export default PostItem;