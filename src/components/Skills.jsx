import React from 'react';

import SkillCard from './SkillCard';
import mysql from '../../public/assets/mysql.png';
import css from '../../public/assets/css.png';
import js from '../../public/assets/javascript.png';
import vite from '../../public/assets/vite.png';
import spring from '../../public/assets/spring.jpg';
import python from '../../public/assets/python.png';
import react from '../../public/assets/react.png';
import tail from '../../public/assets/tailwind.jpeg';
import git from '../../public/assets/github.png';

const skillItem = [
  {
    imgSrc: { mysql },
    label: 'MySQL',
    desc: 'Database'
  },
  {
    imgSrc: { git },
    label: 'Git Hub',
    desc: 'Collabrating Tool'
  },
  {
    imgSrc: { css },
    label: 'CSS',
    desc: 'User Interface'
  },
  {
    imgSrc: { js },
    label: 'JavaScript',
    desc: 'Interaction'
  },
  {
    imgSrc: { vite },
    label: 'ViteJS',
    desc: 'Frontend Tool'
  },
  {
    imgSrc: { spring },
    label: 'Spring Boot',
    desc: 'Java Framework'
  },
  {
    imgSrc: { python },
    label: 'Python',
    desc: 'Programming'
  },
  {
    imgSrc: { react },
    label: 'React',
    desc: 'Framework'
  },
  {
    imgSrc: { tail },
    label: 'TailwindCSS',
    desc: 'User Interface'
  },
];

const Skills = () => {
  return (
    <section  id='skills' className="section bg-[#001f3d] py-12">
      <div className="container mx-auto px-4">
        <h2 className="headline-2 text-white">
          Essential Tools I Use
        </h2>

        <p className="text-[#B0C4DE] mt-3 mb-8 max-w-[50ch] text-lg">
          Discover the powerful tools and technologies I use to create exceptional, high-performing websites & applications.
        </p>

        <div className="grid gap-6 grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))]">
          {skillItem.map(({ imgSrc, label, desc }, key) => (
            <SkillCard
              key={key}
              imgSrc={imgSrc}
              label={label}
              desc={desc}
              className="bg-[#0066cc]/90 rounded-xl shadow-2xl border border-[#003366]/50 p-6 transition-all duration-300 hover:shadow-[#0066cc]/30"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;