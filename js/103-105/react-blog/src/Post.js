import './Post.css';
import React, { useState } from 'react'
import Comments from './Comments';

export default function Post({ post: { id, title, body } }) {
  const [commentsShowing, setCommentsShowing] = useState(false);

  return (
    <div className="post">
      <div className="title">{title}</div>
      <div className="body">{body}</div>
      <div className="comments-area">
        <div className={commentsShowing ? 'comments' : 'comments closed'}>
          {/*commentsShowing &&*/ <Comments postId={id} />}
        </div>
        <button onClick={() => setCommentsShowing(!commentsShowing)}>{commentsShowing ? 'hide' : 'show'} comments</button>
      </div>
    </div>
  )
}
