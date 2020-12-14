import React from 'react';
import { Link } from 'react-router-dom';
import style from './comments.module.css';
import { UserContext } from '../../../UserContext';
import Form from './Form';

function PhotoComments(props) {
  const [comments, setComments] = React.useState(() => props.comments);
  const commentsSection = React.useRef(null);
  const { isLogged } = React.useContext(UserContext);

  React.useEffect(() => {
    commentsSection.current.scrollTop = commentsSection.current.height;
  }, [comments]);

  return (
    <>
      <ul
        ref={commentsSection}
        className={`${style.comments} ${props.single ? style.single : ''}`}
      >
        {comments.map((comment) => (
          <li key={comment.comment_ID}>
            <b>{comment.comment_author}:</b>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </ul>
      {isLogged && (
        <Form single={props.single} setComments={setComments} id={props.id} />
      )}
    </>
  );
}

export default PhotoComments;
