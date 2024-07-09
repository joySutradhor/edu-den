/* eslint-disable no-unused-vars */
import React from 'react';
// socail icons
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { VscTriangleLeft } from "react-icons/vsc";
import { Link } from 'react-router-dom';






const Footer = () => {
    return (
        <>
            <div className='leftRightGap sectionTop'>
                <div className='grid grid-cols-4 justify-between justify-items-center 2xl:py-[81px] 
                bg-[url("https://res.cloudinary.com/dshn2s0tc/image/upload/v1718964842/Edu-den/footer_o0clvx.png")] bg-no-repeat bg-center bg-cover
                
                '>
                    <div>
                        <div className='footerLogo'>
                            <img className=' h-full w-full object-cover' src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1718946421/Edu-den/footerLogo_l2a9co.png" alt="" />
                        </div>
                        <p className='paratext 2xl:py-[25px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam.</p>
                        <div className='socailParents'>
                            <div className='iconParent'>
                                <FaFacebookF className='socailIcons'></FaFacebookF>
                            </div>
                            <div className='iconParent'>
                                <FaInstagram className='socailIcons'></FaInstagram>
                            </div>
                            <div className='iconParent'>
                                <FaYoutube className='socailIcons'></FaYoutube>
                            </div>
                            <div className='iconParent'>
                                <FaLinkedinIn className='socailIcons'></FaLinkedinIn>
                            </div>
                        </div>
                    </div>

                    {/* quick links */}
                    <div className=''>
                        <h5 className='footerTitle'>Quick Links</h5>
                        <div className='quickParent'>
                            <div className='footermenuSingle'>
                                <VscTriangleLeft />
                                <p className='footerMenu'>Home</p>
                            </div>
                            <div className='footermenuSingle'>
                                <VscTriangleLeft />
                                <p className='footerMenu'>About</p>
                            </div>
                            <div className='footermenuSingle'>
                                <VscTriangleLeft />
                                <p className='footerMenu'>Courses</p>
                            </div>
                            <div className='footermenuSingle'>
                                <VscTriangleLeft />
                                <p className='footerMenu'>Contact</p>
                            </div>
                        </div>
                    </div>

                    {/* Learning platfrom */}
                    <div>
                        <h5 className='footerTitle'>Learning platform</h5>
                        <div className='quickParent'>
                            <div className='footermenuSingleLearning'>
                                <div className='iconParent'>
                                    <FaYoutube className='socailIcons'></FaYoutube>
                                </div>
                                <p className='footerMenu'>YouTube</p>
                            </div>
                            <div className='footermenuSingleLearning'>
                                <div className='iconParent'>
                                    <FaFacebookF className='socailIcons'></FaFacebookF>
                                </div>
                                <p className='footerMenu'>Facebook</p>
                            </div>
                            <div className='footermenuSingleLearning'>
                                <div className='iconParent'>
                                    <FaInstagram className='socailIcons'></FaInstagram>
                                </div>
                                <p className='footerMenu'>Instagram</p>
                            </div>
                        </div>
                    </div>

                    {/* get in touch */}
                    <div>
                        <h5 className='footerTitle'>Get In Touch</h5>
                        <div className='quickParent'>
                            <p className='footerMenu'>Phone: 01745349414</p>
                            <p className='footerMenu'>Email: bd@eduden.com</p>
                            <p className='footerMenu'>Location: Dhaka, kollanpur, bridge er niche.</p>
                        </div>
                    </div>
                </div>

            </div>
            <div className='2xl:py-[50px] border-t-[1px] border-white text-center'>
                <p className='copyright '>Copyright © 2024 Edu Den Powered by <span className='underline'>Ethical Den</span></p>
            </div>
        </>
    );
};

export default Footer;