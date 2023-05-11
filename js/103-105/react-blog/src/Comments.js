import React, { useEffect, useState } from 'react'
import Comment from './Comment';

export default function Comments({ postId }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
        if (!response.ok) {
          throw new Error(`${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        console.log(data);
        setComments(data);
      } catch (e) {
        console.error(e);
      }
    })();
  }, [postId]);

  return (
    <>
      {comments?.map(comment => <Comment comment={comment} />)}
    </>
  );
}
