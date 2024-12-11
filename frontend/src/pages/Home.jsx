//import React from 'react'

import heroImg01 from '../assets/images/picture.png'
import icon01 from '../assets/images/icon01.png'
import icon02 from '../assets/images/icon02.png'
import icon03 from '../assets/images/icon03.png'
import featureImg from '../assets/images/feature-img.jpeg'
import faqImg from '../assets/images/faq-img.png'
import videoIcon from '../assets/images/video-icon.png'
import avatarIcon from '../assets/images/avatar-icon.png'
import { Link } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs'
import About from '../components/About/About'
import ServiceList from '../components/Services/ServiceList'
import DoctorList from '../components/Doctors/DoctorList'
import FaqList from '../components/Faq/FaqList'

 
const Home = () => {
  return <>
 {/* ============== hero section ============== */}
 <section className="hero_section pt-[60px] fade-in">
      <div className="container min-h-[600px] flex items-center">
        <div className="flex flex-col lg:flex-row items-center justify-between w-full">
          <div className="text-left lg:w-1/2">
            <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[50px] md:leading-[60px]">
              Get Expert Services <br /> Right at Your Doorstep
            </h1>
            <p className="text__para mt-4 text-[16px]">
              Reliable, fast, and professional home services for all your needs. Book now to experience the difference.
            </p>
            <div className="mt-6">
              <Link to="/appointment" className="btn bg-primary text-white px-6 py-3 rounded-md shadow-md hover:bg-secondary">
                Request an Appointment
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-end items-center">
            <img src={heroImg01} alt="Service Hero" className="rounded-lg shadow-lg w-[400px] h-[450px] object-cover" />
          </div>
        </div>
      </div>
    </section>

    {/* How It Works Section */}
    <section className="fade-in">
      <div className='container'>
        <div className='lg:w-[470px] mx-auto'>
          <h2 className='heading text-center'>HOW IT WORKS</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
          {[icon01, icon02, icon03].map((icon, idx) => (
            <div key={idx} className='py-[30px] px-5 fade-out'>
              <div className='flex items-center justify-center'>
                <img src={icon} alt="" />
              </div>
              <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>
                {['Find a Service', 'Find a Location', 'Book Appointment'][idx]}
              </h2>
              <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>
                World class service for everyone. Our Home Service System offers unmatched, expert, and skilled professionals.
              </p>
              <Link to='/doctors' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-blue-500 hover:border-none'>
                <BsArrowRight className='group-hover:text-white w-6 h-5' />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>

      <br />
      <br />
    <section>
      <br />
      <br />
      <br />

      <div className='container' >
        <div className='lg:w-[470px] mx-auto'>
          <h2 className='heading text-center'>
            HOW IT WORKS
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">

          <div className='py-[30px] px-5'>
            <div className='flex items-center justify-center'>
              <img src={icon01} alt="" />
            </div>

            <div className="mt-[px]">
              <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>
                Find a Service
              </h2>
              <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>
                World class service for everyone. Our Home Service System Offers unmatched, expert and skilled people. 
                From your home to the repair.
              </p>

              <Link to='/doctors' className='w-[44px] h-[44px] rounded-full border border-solid boder-[#181A1E] mt-[30px] 
              mx-auto flex items-center justify-center group hover:bg-blue-500 hover:border-none'>
                <BsArrowRight className='group-hover:text-white w-6 h-5' />
              </Link>
            </div>
          </div>

          <div className='py-[30px] px-5'>
            <div className='flex items-center justify-center'>
              <img src={icon02} alt="" />
            </div>

            <div className="mt-[px]">
              <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>
                Find a Location
              </h2>
              <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>
              World class service for everyone. Our Home Service System Offers unmatched, expert and skilled people. 
              From your home to the repair.
              </p>

              <Link to='/doctors' className='w-[44px] h-[44px] rounded-full border border-solid boder-[#181A1E] mt-[30px] 
              mx-auto flex items-center justify-center group hover:bg-blue-500 hover:border-none'>
                <BsArrowRight className='group-hover:text-white w-6 h-5' />
              </Link>
            </div>
          </div>

          <div className='py-[30px] px-5'>
            <div className='flex items-center justify-center'>
              <img src={icon03} alt="" />
            </div>

            <div className="mt-[px]">
              <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>
                Book Appoinment
              </h2>
              <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>
              World class service for everyone. Our Home Service System Offers unmatched, expert and skilled people. 
              From your home to the repair.
              </p>

              <Link to='/doctors' className='w-[44px] h-[44px] rounded-full border border-solid boder-[#181A1E] mt-[30px] 
              mx-auto flex items-center justify-center group hover:bg-blue-500 hover:border-none'>
                <BsArrowRight className='group-hover:text-white w-6 h-5' />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>

    {/* ============== About section Start ============== */}

    <About />

    {/* ============== Service section ============== */}
      <br />
      <br />
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className='heading text-center mb-4'> Our Home Services </h2>
            <p className='text__para text-center mb-4'>
            World class service for everyone. Our Home Service System Offers unmatched, expert and skilled people. 
            From your home to the repair.
            </p>
          </div>

        <ServiceList />

        </div>
      </section>

    {/* ============== Service section end ============== */}

    {/* ============== Feature section ============== */}
    <br /><br /><br />
      <section>
        <div className="container">
          <div className="flex items-center justify-between flex-col lg:flex-row">
          {/* ============== Feature content ============== */}
          <div className="xl:w-[670px]">
            <h2 className='heading  m-6'>
              Get Service at your doorstep <br /> anytime
            </h2>
            <ul className='pl-4'>
              <li className='text__para mb-3'>1. Schedule the appoinment directly.</li>
              <li className='text__para mb-3'>2. Search your service here, and contact them.</li>
              <li className='text__para'>3. View your tradesperson who are accepting new customers, use the online
              scheduling tool to select an appoinment time.</li>
            </ul>
            <Link to="/">
              <button className='btn ml-3'>Learn More</button>
            </Link>
          </div>

            {/* ============== Feature img ============== */}
            <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0">
              <img src={featureImg} className='w-3/4' alt="" />
              <div className="w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px]
              md:left-5 z-20 p-2 pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-[6px] lg:gap-3">
                    <p className='text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-black font-[600]'>
                      Tue, 24
                    </p>
                    <p className='text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-textColor font-[400]'>
                      10:00AM
                    </p>
                  </div>
                  <span className='w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-center bg-yellow-300
                  rounded py-1 px-[6px] lg:py-3 lg:px-[9px]'>
                    <img src={videoIcon} alt="" />
                  </span>
                </div>

                <div className='w-[65px] lg:w-[96px] bg-[#CCF0F3] py-1 px-2 lg:py-[6px] lg:px-[10px] text-8px
                leading-[8px] lg:text-[12px] lg:leading-4 text-[#246BCE] font-[500] mt-2 lg:mt-4 rounded-full'>
                  Consultation
                </div>
                <div className="flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px]">
                  <img src={avatarIcon} alt="" />
                  <h4 className='text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700] text-textColor'>Rahul Gupta</h4>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
      <br />
      <br />
      <br /><br />
    {/* ============== Feature section end ============== */}

    {/* ============== Our great services ============== */}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className='heading text-center m-5'> Our Great Service Providers </h2>
          </div>
          

          <DoctorList />
        </div>
      </section>
    {/* ============== Our great doctors end ============== */}

    {/* ============== faq section  ================ */}
    <br /><br /><br />
      <section>
        <div className="container">
          <div className="flex justify-between gap-[50px] lg:gap-0">
            <div className='w-1/2 hidden md:block'>
              <img src={faqImg} alt="" />
            </div>

            <div className='w-full md:w-1/2'>
              <h2 className='heading'>
                Most question by our beloved customers
              </h2>

              <FaqList />
            </div>

          </div>
        </div>
      </section>
      <br />
      <br />
      <br />
      <br /><br />
    {/* ============== faq section end  ============== */}

    
  </>
}

export default Home