// eslint-disable-next-line no-unused-vars
import React from 'react';
import { FaLongArrowAltRight } from "react-icons/fa";


const About = () => {
    return (
        <div className='sectionTop leftRightGap'>
            <div className=' grid grid-cols-12 items-center '>
                <div className='col-span-4'>
                    <h2 className='headingTitle  2xl:pb-[96px]'> <span className='textUderline'>About </span> Us</h2>
                    <button className='readMoreBtn'>Read More <span><FaLongArrowAltRight></FaLongArrowAltRight></span></button>
                </div>
                <div className='col-span-8'>
                    <p className='aboutpara'>Well, because we’re not your grandma’s boring old school! At Edu-Den, we’re the rebels of education, the mavericks of learning, and the champions of fun-filled knowledge. We’ll teach you how to slay dragons and code websites, all while cracking jokes and sipping on virtual coffee. So, why settle for snooze-worthy lectures when you can join the Edu-Den revolution? Let’s make learning epic together! <br />  Well, because we’re not your grandma’s boring old school! At Edu-Den, we’re the rebels of education, the mavericks of learning, and the champions of fun-filled knowledge. We’ll teach you how to slay dragons and code websites, all while cracking jokes and sipping on virtual coffee.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;