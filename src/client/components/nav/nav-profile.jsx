import React, { PropTypes } from 'react';
import { Routes } from '../../../shared/constants';

const NavProfileLogged = ({ user }) => (
  <div className='user'>
    <div className='logoff-button nav-button'>
      <a className='link' href={Routes.signOut}>Se déconnecter</a>
    </div>
    <h6 className='username'>{user.name}</h6>
    <div class='imgcircle'>
      if (user.imgUrl) {
        <img className='img' src={user.imgUrl} alt="{user.name}'s profile image" />
      }
    </div>
  </div>
);

NavProfileLogged.propTypes = {
  user: React.PropTypes.shape({
    name: React.PropTypes.string.isRequired,
    imgUrl: React.PropTypes.string,
  }),
};

const NavProfileSignIn = () => (
  <h6 className='signin-button nav-button'>
    <a className='link' href={Routes.signIn}>Connectez-vous !</a>
  </h6>
);

const NavProfile = ({ user }) => (
  <div className='nav-profile'>
    {user ? (
      <NavProfileLogged user={user} />
    ) : (
      <NavProfileSignIn />
    )}
  </div>
);

NavProfile.propTypes = {
  user: NavProfileLogged.propTypes.user,
};

export default NavProfile;
