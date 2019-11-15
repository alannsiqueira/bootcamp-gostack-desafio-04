import React from 'react';

export default function Comment({ comment }) {
  return (
    <div className="comment">
      <img className="avatar" src={comment.author.avatar} alt="" />
      <div className="comment-wrapper">
        <strong>{comment.author.name}</strong>
        <span className="comment-content">{comment.content}</span>
      </div>
    </div>
  );
}
