import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import { Link } from 'react-router-dom';

const AuthTemplate = ({ children }) => {
  return (
    <div className="logo-area">
      {children}
    </div>
  );
};

export default AuthTemplate;
