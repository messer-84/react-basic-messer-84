import React from 'react';

function Comment({ comment }) {
  return (
    <div className="commentWrap">
      <div className="commentText">
        {comment.text}
      </div>
      <div className="commentUser">
        {comment.user}
      </div>
    </div>
  );
}

export default Comment;
