// eslint-disable-next-line no-unused-vars
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./HeroSection.css";
import { FaLongArrowAltRight } from "react-icons/fa";
import { RiFacebookFill } from "react-icons/ri";
import { IoLogoInstagram } from "react-icons/io5";
import { IoLogoYoutube } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";






const HeroSection = () => {
    const settingsLargeGallary = {
        dots: true,
        slidesToScroll: 1,
        pauseOnHover: true,
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "200px", // Adjust this to show parts of adjacent slides
        slidesToShow: 1,
        speed: 500,
        cssEase: "linear",
        prevArrow: <CustomLargePrevArrowGallary />,
        nextArrow: <CustomLargeNextArrowGallary />,
    };

    return (
        <div className="slider-container">
            <Slider {...settingsLargeGallary}>
               
                <div className="slide-item">
                    <img
                        className="slide-image"
                        src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1719120362/Edu-den/herosection_wlmn3t.png"
                        alt="Slide 3"
                    />
                    <div className="absolute top-[61px] left-[5%] text-left">
                        <div className="flex justify-between items-center">
                            <div className="">
                                <button className="wellcomeBtn">WELCOME TO EDUDEN</button>
                                <h1 className="heroTitle 2xl:pr-[40%]">Where Learning Meets Imagination & Innovation!</h1>
                                <p className="heroparagraph 2xl:pr-[50%]">We're your one-stop destination for unlocking your potential and conquering the digital realm with confidence.</p>
                                <button className="discoverBtn">Discover More</button>
                            </div>
                            <div className="">
                                <div className="flex flex-col items-center bg-[#A8FF57] h-full 2xl:pt-[30px] 2xl:mr-[46px] rounded-full  ">
                                    <p className="transform rotate-90 text-center followText  ">Follow</p>
                                    <FaLongArrowAltRight className="transform rotate-90 text-center mb-2" />
                                    <div className="heroSocailParent">
                                        <RiFacebookFill className="herosocailIcon text-center mb-2" />
                                    </div>
                                    <div className="heroSocailParent">
                                        <IoLogoInstagram className="herosocailIcon text-center mb-2" />
                                    </div>
                                    <div className="heroSocailParent">
                                        <IoLogoYoutube className="herosocailIcon text-center mb-2" />
                                    </div>
                                    <div className="heroSocailParent">
                                        <FaLinkedinIn className="herosocailIcon text-center mb-2" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="slide-item">
                    <img
                        className="slide-image"
                        src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1719120362/Edu-den/herosection_wlmn3t.png"
                        alt="Slide 3"
                    />
                    <div className="absolute top-[61px] left-[5%] text-left">
                        <div className="flex justify-between items-center">
                            <div className="">
                                <button className="wellcomeBtn">WELCOME TO EDUDEN</button>
                                <h1 className="heroTitle 2xl:pr-[40%]">Where Learning Meets Imagination & Innovation!</h1>
                                <p className="heroparagraph 2xl:pr-[50%]">We're your one-stop destination for unlocking your potential and conquering the digital realm with confidence.</p>
                                <button className="discoverBtn">Discover More</button>
                            </div>
                            <div className="">
                                <div className="flex flex-col items-center bg-[#A8FF57] h-full 2xl:pt-[30px] 2xl:mr-[46px] rounded-full  ">
                                    <p className="transform rotate-90 text-center followText  ">Follow</p>
                                    <FaLongArrowAltRight className="transform rotate-90 text-center mb-2" />
                                    <div className="heroSocailParent">
                                        <RiFacebookFill className="herosocailIcon text-center mb-2" />
                                    </div>
                                    <div className="heroSocailParent">
                                        <IoLogoInstagram className="herosocailIcon text-center mb-2" />
                                    </div>
                                    <div className="heroSocailParent">
                                        <IoLogoYoutube className="herosocailIcon text-center mb-2" />
                                    </div>
                                    <div className="heroSocailParent">
                                        <FaLinkedinIn className="herosocailIcon text-center mb-2" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="slide-item">
                    <img
                        className="slide-image"
                        src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1719120362/Edu-den/herosection_wlmn3t.png"
                        alt="Slide 3"
                    />
                    <div className="absolute top-[61px] left-[5%] text-left">
                        <div className="flex justify-between items-center">
                            <div className="">
                                <button className="wellcomeBtn">WELCOME TO EDUDEN</button>
                                <h1 className="heroTitle 2xl:pr-[40%]">Where Learning Meets Imagination & Innovation!</h1>
                                <p className="heroparagraph 2xl:pr-[50%]">We're your one-stop destination for unlocking your potential and conquering the digital realm with confidence.</p>
                                <button className="discoverBtn">Discover More</button>
                            </div>
                            <div className="">
                                <div className="flex flex-col items-center bg-[#A8FF57] h-full 2xl:pt-[30px] 2xl:mr-[46px] rounded-full  ">
                                    <p className="transform rotate-90 text-center followText  ">Follow</p>
                                    <FaLongArrowAltRight className="transform rotate-90 text-center mb-2" />
                                    <div className="heroSocailParent">
                                        <RiFacebookFill className="herosocailIcon text-center mb-2" />
                                    </div>
                                    <div className="heroSocailParent">
                                        <IoLogoInstagram className="herosocailIcon text-center mb-2" />
                                    </div>
                                    <div className="heroSocailParent">
                                        <IoLogoYoutube className="herosocailIcon text-center mb-2" />
                                    </div>
                                    <div className="heroSocailParent">
                                        <FaLinkedinIn className="herosocailIcon text-center mb-2" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               
            </Slider>
        </div>
    );
};

const CustomLargePrevArrowGallary = (props) => (
    <div
        {...props}
        className=""
        aria-label="Previous"
        type="button"
    >
        {/* <img className="arrow-button-large-gallary" src='https://res.cloudinary.com/dshn2s0tc/image/upload/v1719122478/Edu-den/sliderBtnLeft_ppda4x.png' alt="Previous" /> */}
        <button><FaArrowLeftLong className="arrow-button-large-gallary "></FaArrowLeftLong></button>
    </div>
);

const CustomLargeNextArrowGallary = (props) => (
    <div
        {...props}
       className=""
        aria-label="Next"
        type="button"
    >
        {/* <img className="arrow-button-large-gallary2" src='https://res.cloudinary.com/dshn2s0tc/image/upload/v1719122478/Edu-den/sliderBtnRight_llgeup.png' alt="Next" /> */}
        <button><FaArrowRightLong className="arrow-button-large-gallary2 text-white"></FaArrowRightLong></button>
    </div>
);

export default HeroSection;
