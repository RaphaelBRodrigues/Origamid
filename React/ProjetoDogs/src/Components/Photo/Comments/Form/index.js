import React from 'react';
import style from './form.module.css';
import { ReactComponent as Enviar } from '../../../../Assets/enviar.svg';
import useFetch from '../../../../Hooks/useFetch';
import { COMMENT_POST } from '../../../../api';
import Error from '../../../Helper/Error';

function Form({ id, setComments, single }) {
  const [comment, setComment] = React.useState('');
  const { request, error } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = COMMENT_POST(id, { comment });
    const { resp, json } = await request(url, options);
    if (resp.ok) {
      setComments((comments) => {
        setComment('');
        return [...comments, json];
      });
    }
  }
  return (
    <form
      onSubmit={handleSubmit}
      className={`${style.form} ${single ? style.single : ''}`}
    >
      <textarea
        className={style.textarea}
        id="comment"
        name="comment"
        placeholder="Comente.."
        value={comment}
        onChange={({ target }) => setComment(target.value)}
      />
      <button className={style.button}>
        <Enviar />
      </button>
      <Error error={error} />
    </form>
  );
}

export default Form;
