import React from 'react';
import style from './feed.module.css';
import Modal from './Modal';
import Photos from './Photos';
import PropTypes from 'prop-types';

function Feed({ user }) {
  const [modalPhoto, setModalPhoto] = React.useState(null);
  const [pages, setPages] = React.useState([1]);
  const [infinite, setInfinite] = React.useState(true);

  React.useEffect(() => {
    let wait = false;
    function infiniteScroll() {
      if (infinite) {
        const scroll = window.scrollY;
        const height = document.body.offsetHeight - window.innerHeight;

        if ((scroll > height * 0.75) & !wait) {
          setPages((pags) => {
            return [...pags, pages.length + 1];
          });
          wait = true;
          setTimeout(() => {
            wait = false;
          }, 500);
        }
      }
    }

    window.addEventListener('wheel', infiniteScroll);
    window.addEventListener('scroll', infiniteScroll);
    return () => {
      window.removeEventListener('wheel', infiniteScroll);
      window.removeEventListener('scroll', infiniteScroll);
    };
  }, [infinite]);

  return (
    <div className={style.teste}>
      {modalPhoto && <Modal setModalPhoto={setModalPhoto} photo={modalPhoto} />}

      {pages.map((page) => {
        return (
          <Photos
            setInfinite={setInfinite}
            user={user}
            key={page}
            page={page}
            setModalPhoto={setModalPhoto}
          />
        );
      })}
    </div>
  );
}

Feed.defaultProps = {
  user: 0,
};

Feed.propTypes = {
  user: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired,
  ]),
};

export default Feed;
