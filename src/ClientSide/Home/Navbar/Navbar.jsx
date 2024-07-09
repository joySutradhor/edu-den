// eslint-disable-next-line no-unused-vars
import React from 'react';

const Navbar = () => {
    return (
        <div className='2xl:pb-[49px] 2xl:pt-[61px] leftRightGap'>
            <div className='flex justify-between items-center'>
                <div className='navLogo '>
                    <img src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1718946421/Edu-den/footerLogo_l2a9co.png" alt="" />
                </div>
                <div className='flex items-center 2xl:space-x-[45px]'>
                    <p className='headerMenu'>Home</p>
                    <p className='headerMenu'>About Us</p>
                    <p className='headerMenu'>Courses</p>
                    <p className='headerMenu'>What’s New</p>
                    <p className='headerMenu'>Verify</p>
                    <p className='headerMenu'>Contact Us</p>
                </div>
                <div>
                    <button className='headerEnrollBtn'>Enroll Now</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;