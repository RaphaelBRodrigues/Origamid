import React from 'react';

function Teste() {
  React.useEffect(() => {
    return () => {
      alert();
    };
  }, []);
  return <div>testeasd</div>;
}

export default Teste;
