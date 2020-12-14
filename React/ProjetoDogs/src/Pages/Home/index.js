import React from 'react';
import Feed from '../../Components/Feed';
import styles from './home.module.css';
import Head from '../../Components/Helper/Head';

function Home() {
  return (
    <section className="container mainContainer">
      <Head title="Fotos" description="DASDSA DAS" />
      <Feed />
    </section>
  );
}

export default Home;
