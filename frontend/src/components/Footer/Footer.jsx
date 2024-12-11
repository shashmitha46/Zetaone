import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';

import { AiFillYoutube, AiFillGithub, AiOutlineInstagram, AiFillLinkedin } from 'react-icons/ai';

const socialLinks = [
  {
    path: "https://studio.youtube.com",
    icon: <AiFillYoutube className="group-hover:text-white w-4 h-5" />,
  },
  {
    path: "https://github.com",
    icon: <AiFillGithub className="group-hover:text-white w-4 h-5" />,
  },
  {
    path: "https://www.instagram.com",
    icon: <AiOutlineInstagram className="group-hover:text-white w-4 h-5" />,
  },
  {
    path: "https://www.linkedin.com",
    icon: <AiFillLinkedin className="group-hover:text-white w-4 h-5" />,
  },
];

const quickLinks01 = [
  { path: "/", display: "Services" },
  { path: "/", display: "How it Works" },
  { path: "/", display: "About Us" },
  { path: "/", display: "Contact" },
];

const quickLinks02 = [
  { path: "/", display: "AC Services" },
  { path: "/", display: "Electrical" },
  { path: "/", display: "Plumbing" },
  { path: "/", display: "Carpentry" },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="pb-16 pt-10 bg-[#0F172A] text-white">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between gap-[30px]">
          {/* Logo and Description */}
          <div>
            <h1 className="text-[24px] font-bold flex items-center gap-2">
              <span role="img" aria-label="tool">🔧</span> ZETAONE
            </h1>
            <p className="text-[16px] leading-7 font-400 mt-4">
              Your trusted partner for all home services. Quality work guaranteed.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6">Quick Links</h2>
            <ul>
              {quickLinks01.map((item, index) => (
                <li key={index} className="mb-4">
                  <Link to={item.path} className="text-[16px] leading-7 font[400]">
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6">Services</h2>
            <ul>
              {quickLinks02.map((item, index) => (
                <li key={index} className="mb-4">
                  <Link to={item.path} className="text-[16px] leading-7 font[400]">
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6">Contact Us</h2>
            <ul>
              <li className="mb-4">
                <p className="text-[16px] leading-7 font[400]">+1 234 567 890</p>
              </li>
              <li className="mb-4">
                <p className="text-[16px] leading-7 font[400]">support@zetaone.com</p>
              </li>
              <li className="flex gap-3 mt-4">
                {socialLinks.map((link, index) => (
                  <Link
                    to={link.path}
                    key={index}
                    className="w-9 h-9 border-solid border-[#181A1E] rounded-full flex items-center justify-center group hover:bg-[#343f76] hover:border-none"
                  >
                    {link.icon}
                  </Link>
                ))}
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center mt-10">
          <p className="text-[14px]">
            &copy; {year} ZETAONE. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
