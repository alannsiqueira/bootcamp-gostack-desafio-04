import React from 'react';

import Comment from './Comment'

export default function Post({ post }) {
    return (
        <div className="post">
            <div className="avatar-wrapper">
                <img className="avatar" src={post.author.avatar} alt="" />
                <div className="detail">
                    <strong>{post.author.name}</strong>
                    <span className="date">{post.date}</span>
                </div>
            </div>
            <span className="post-content">{post.content}</span>
            <div className="divider"></div>
            {post.comments.map((comment, index) => <Comment className="comment" key={index} comment={comment} />)}
        </div>
    );
}
