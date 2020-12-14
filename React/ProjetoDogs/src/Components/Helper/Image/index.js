import React from 'react';
import styles from './image.module.css';

const Image = ({ alt, src, ...props }) => {
  const [skeleton, setSkeleton] = React.useState(true);

  function handleLoad({ target }) {
    target.style.opacity = 1;
    setSkeleton(false);
  }

  return (
    <div className={styles.wrapper}>
      {skeleton && <div className={styles.skeleton}></div>}
      <img
        onLoad={handleLoad}
        alt={alt}
        src={src}
        {...props}
        className={styles.img}
      />
    </div>
  );
};

export default Image;
