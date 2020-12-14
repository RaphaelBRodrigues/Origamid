import React from 'react';
import { useParams } from 'react-router-dom';
import style from './userProfile.module.css';
import Feed from '../../Components/Feed';

const UserProfile = () => {
  const { user } = useParams();
  return (
    <section className="Container mainSection">
      <h1 class="title">{user}</h1>
      <Feed user={user} />
    </section>
  );
};

export default UserProfile;
