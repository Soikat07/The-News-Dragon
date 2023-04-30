import React from 'react';
import logo from '../../../../public/logo.png'
import moment from 'moment';
const Header = () => {
  return (
    <div>
      <div className="text-center mt-3">
        <img src={logo} alt="" />
        <p>
          <small>Journalism Without Fear or Favour</small>
        </p>
        <p>{moment().format('dddd,MMMM DD,YYYY')}</p>
      </div>
    </div>
  );
};

export default Header;