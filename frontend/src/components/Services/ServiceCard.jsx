//import React from 'react'
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const ServiceCard = ({ item, index }) => {
  const { name, desc, bgColor, textColor } = item;

  return (
    <div className="py-[30px] px-3 lg:px-5 bg-white shadow-md rounded-lg flex flex-col items-start">
      <br />
      <br />
      <br />
      <br />
      <br /><br /><br /><br />
      <br />
      {/* Icon */}
      <div
        className="w-12 h-12 flex items-center justify-center rounded-md mb-4"
        style={{ background: `${bgColor}` }}
      >
        {/* Assuming you pass the icon dynamically in `item.icon` */}
        <BsArrowRight className="text-blue-500 w-6 h-6" />
      </div>

      {/* Service Title */}
      <h2 className="text-[26px] leading-9 text-black font-[700]">{name}</h2>

      {/* Service Description */}
      <p className="text-[16px] leading-7 font-[400] text-textColor-100 mt-4">
        {desc}
      </p>

      {/* Link Section */}
      <div className="mt-auto flex items-center justify-between w-full">
        <Link
          to="/doctors"
          className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] flex items-center justify-center group hover:bg-blue-500 hover:border-none"
        >
          <BsArrowRight className="group-hover:text-white w-6 h-5" />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
