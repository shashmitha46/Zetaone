import React, { useState } from 'react';

const DoctorAbout = () => {
  const [searchResults, setSearchResults] = useState([]);

  const professions = [
    {
      name: 'Shiv Singh',
      profession: 'Mechanic',
      education: [
        {
          duration: '08-29-2010 - 08-31-2015',
          institute: 'Aashta Mechanic Shop, Gorakhpur',
        },
        {
          duration: '10-01-2015 - 10-04-2018',
          institute: 'Aashta Mechanic Shop, Gorakhpur',
        },
      ],
      experience: [
        {
          duration: '10-01-2015 - 10-04-2018',
          role: 'Mechanic',
          company: 'Aashta Mechanic Shop, Gorakhpur',
        },
      ],
    },
  ];

  const handleSearch = () => {
    const results = professions.filter(
      (person) => person.profession.toLowerCase() === 'mechanic'
    );
    setSearchResults(results);
  };

  return (
    <div>
      <div>
        <h3 className='text-[20px] leading-[30px] text-black font-semibold flex items-center gap-2'>
          About of
          <span className='text-[#246BCE] font-bold text-[24px] leading-9 ml-3'>
            Shiv Singh
          </span>
        </h3>
        <p className="text__para">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, consectetur alias.
          Consequuntur voluptatum recusandae sit, hic animi maiores alias! Aliquid, sed rem
          quo explicabo autem quis eligendi magnam vero adipisci?
        </p>
      </div>

      <button 
        className='btn mt-0 rounded-[0px] rounded-r-md' 
        onClick={handleSearch}
      >
        Search
      </button>

      {searchResults.length > 0 && (
        <div className='mt-12'>
          <h3 className='text-[20px] leading-[30px] text-black font-semibold'>Search Results</h3>
          <ul className='pt-4 md:p-5'>
            {searchResults.map((person, index) => (
              <li key={index} className='mb-[30px]'>
                <p className='text-[16px] leading-6 font-medium text-textColor'>
                  {person.name} - {person.profession}
                </p>
                <h4 className='font-semibold'>Education</h4>
                {person.education.map((edu, idx) => (
                  <p key={idx}>{edu.duration} - {edu.institute}</p>
                ))}
                <h4 className='font-semibold'>Experience</h4>
                {person.experience.map((exp, idx) => (
                  <p key={idx}>{exp.duration} - {exp.company}</p>
                ))}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DoctorAbout;
