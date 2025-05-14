import React from 'react';

const educationData = [
  {
    degree: 'B.Tech - Artificial Intelligence & Data Science',
    institution: 'Arjun College of Technology',
    year: '2020 - 2024',
    percentage: 84
  },
  {
    degree: 'Higher Secondary Education',
    institution: 'Kongu Vellaler Higher Secondary School',
    year: '2019 - 2020',
    percentage: 84
  },
  {
    degree: 'SSLC',
    institution: 'Sri Laxmi Narasimhalu Naidu Memorial Higher Secondary School',
    year: '2017 - 2018',
    percentage: 84
  }
];

const Education = () => {
  return (
    <section id="education" className="section bg-[#001f3d] text-white py-12 font-poppins">
      <div className="container mx-auto px-4">
        <h2 className="headline-2 text-white">
          Education
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {educationData.map((item, index) => (
            <div
              key={index}
              className="group bg-[#002a54]/90 border border-[#003366]/50 rounded-2xl p-6 shadow-md hover:shadow-[#4682B4]/50 transition-all duration-300 relative"
            >
              <div className="flex items-start gap-4">
                <span className="material-symbols-rounded text-[#4682B4] text-4xl">
                  school
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-white">{item.degree}</h3>
                  <p className="text-sm text-white">{item.institution}</p>
                  <p className="text-sm text- white">{item.year}</p>
                  <p className="text-sm text- white">Percentage: {item.percentage}%</p>
                </div>
              </div>
              <p className="mt-4 text-[#B0C4DE] text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;