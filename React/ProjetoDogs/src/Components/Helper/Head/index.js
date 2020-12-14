import React from 'react';

const Head = (props) => {
  React.useEffect(() => {
    document.title = 'Dogs - ' + props.title;
    document
      .querySelector("meta[name='description']")
      .setAttribute('content', props.attribute || '');
  }, []);
  return <div></div>;
};

export default Head;
