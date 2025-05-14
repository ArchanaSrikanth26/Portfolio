import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

const Navbar = ({ navOpen }) => {
  const lastActiveLink = useRef(null);
  const activeBox = useRef(null);

  const initActiveBox = () => {
    if (!lastActiveLink.current || !activeBox.current) return;

    activeBox.current.style.top = lastActiveLink.current.offsetTop + 'px';
    activeBox.current.style.left = lastActiveLink.current.offsetLeft + 'px';
    activeBox.current.style.width = lastActiveLink.current.offsetWidth + 'px';
    activeBox.current.style.height = lastActiveLink.current.offsetHeight + 'px';
  };

  useEffect(() => {
    initActiveBox();
    window.addEventListener('resize', initActiveBox);

    return () => {
      window.removeEventListener('resize', initActiveBox);
    };
  }, []);

  const activeCurrentLink = (event) => {
    if (lastActiveLink.current) {
      lastActiveLink.current.classList.remove('active');
    }

    event.target.classList.add('active');
    lastActiveLink.current = event.target;

    activeBox.current.style.top = event.target.offsetTop + 'px';
    activeBox.current.style.left = event.target.offsetLeft + 'px';
    activeBox.current.style.width = event.target.offsetWidth + 'px';
    activeBox.current.style.height = event.target.offsetHeight + 'px';
  };

  const navItems = [
    {
      label: 'Home',
      link: '#home',
      className: 'nav-link active',
    },
    {
      label: 'About',
      link: '#about',
      className: 'nav-link',
    },
    {
      label: 'Skills',
      link: '#skills',
      className: 'nav-link',
    },
    {
      label: 'Projects',
      link: '#projects',
      className: 'nav-link',
    },
    {
      label: 'Education',
      link: '#education',
      className: 'nav-link',
    },
   
   
  ];

  return (
    <nav className={'navbar bg-[#001f3d] text-white' + (navOpen ? ' active' : '')}>
      {navItems.map(({ label, link, className }, key) => (
        <a
          href={link}
          key={key}
          ref={className.includes('active') ? lastActiveLink : null}
          className={className + ' text-[#B0C4DE] hover:text-[#4682B4] transition-colors duration-300'}
          onClick={activeCurrentLink}
        >
          {label}
        </a>
      ))}

      <div className='active-box bg-[#4682B4]/50' ref={activeBox}></div>
    </nav>
  );
};

Navbar.propTypes = {
  navOpen: PropTypes.bool.isRequired,
};

export default Navbar;