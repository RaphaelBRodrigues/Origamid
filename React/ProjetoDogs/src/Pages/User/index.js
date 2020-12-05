import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Feed from '../../Components/Footer';
import Header from './Components/Header';
import PhotoPost from './Components/PhotoPost';
import Stats from './Components/Stats';
import styles from './user.module.css';

const User = () => {
  return (
    <section className="container">
      <Header />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="postar" element={<PhotoPost />} />
        <Route path="estatisticas" element={<Stats />} />
      </Routes>
    </section>
  );
};

export default User;
