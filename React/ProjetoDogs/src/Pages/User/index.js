import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import Feed from '../../Components/Feed';
import { UserContext } from '../../UserContext';
import NotFound from '../NotFound';
import Header from './Components/Header';
import PhotoPost from './Components/PhotoPost';
import Stats from './Components/Stats';
import styles from './user.module.css';

const User = () => {
  const { data } = useContext(UserContext);

  return (
    <section className="container">
      <Header />
      <Routes>
        <Route path="/" element={<Feed user={data.id} />} />
        <Route path="postar" element={<PhotoPost />} />
        <Route path="estatisticas" element={<Stats />} />{' '}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </section>
  );
};

export default User;
