import React from 'react';
import Comment from './Comment';

function CommentList({ comments }) {
  if (!comments || !comments.length) {
    return <p>No comments yet.</p>;
  }
  return (
    <ul>
      {comments.map(comment => {
        return (
          <li key={comment.id}>
            <Comment comment={comment} />
          </li>
        );
      })}
    </ul>
  );
}

export default CommentList;
