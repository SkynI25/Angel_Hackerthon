import React from 'react';
import './Footer.scss';
import { AiOutlineGithub } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <span>2020 ANGELHACK SEOUL</span>
        <a href="https://github.com/SkynI25/Angel_Hackerthon">
          <AiOutlineGithub />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
