// eslint-disable-next-line no-unused-vars
import React from 'react';
import Footer from './Footer/Footer';
import Faq from './Faq/Faq';
import NeedHelp from './NeedHelp/NeedHelp';
import JoinClan from './JoinClan/JoinClan';
import Testimonial from './Testimonial/Testimonial';
import Event from './Event/Event';
import OurPartner from './OurPartner/OurPartner';
import ReelsVideo from './ReelsVideo/ReelsVideo';
import AllCourse from './AllCourse/AllCourse';
import TrendingCourse from './TrendingCourse/TrendingCourse';
import PopularCategories from './PopularCategories/PopularCategories';
import About from './About/About';
import HeroSection from './HeroSection/HeroSection';
import Navbar from './Navbar/Navbar';

const Home = () => {
    return (
        <div className='bg-[#010101]'>
            <Navbar></Navbar>
            <HeroSection></HeroSection>
            <About></About>
            <PopularCategories></PopularCategories>
            <TrendingCourse></TrendingCourse>
            <AllCourse></AllCourse>
            <ReelsVideo></ReelsVideo>
            <OurPartner></OurPartner>
            <JoinClan></JoinClan>
            <Event></Event>
            <Testimonial></Testimonial>
            <NeedHelp></NeedHelp>
            <Faq></Faq>
            <Footer></Footer>
        </div>
    );
};

export default Home;