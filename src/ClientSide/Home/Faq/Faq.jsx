// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { BiMessageDetail } from "react-icons/bi";


// #A8FF57
const Faq = () => {

    const [openAccordion, setOpenAccordion] = useState(1);

    const toggleAccordion = (accordionNumber) => {
        setOpenAccordion(accordionNumber === openAccordion ? 0 : accordionNumber);
    };

    return (
        <div>
            <div className='leftRightGap sectionTop'>
                <h2 className='headingTitle'><span className='textUderline'>Frequently</span> <br /> Asked Question</h2>

                <div className='pt-[80px] grid grid-cols-12 2xl:space-x-[80px]'>
                    <div className='2xl:space-y-[15px] col-span-7'>
                        <div className="accordianMainParent">
                            <div
                                className="accordianSingleParent"
                                onClick={() => toggleAccordion(1)}
                            >
                                <h6 className="accordianHeadText relative z-20 " ><span className="z-20">What is ByteSkill?</span></h6>
                                <span className={`transform ${openAccordion === 1 ? 'rotate-180' : 'rotate-0'} transition-transform`}>
                                    <div className=''>
                                        <MdOutlineKeyboardArrowDown className='accordianIcon'></MdOutlineKeyboardArrowDown>
                                    </div>
                                </span>
                            </div>
                            {openAccordion === 1 && (
                                <div >
                                    <p className='paratext' >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam.</p>
                                </div>
                            )}

                        </div>

                        {/* items two */}
                        <div className="accordianMainParent">
                            <div
                                className="accordianSingleParent"
                                onClick={() => toggleAccordion(2)}
                            >
                                <h6 className="accordianHeadText relative z-20 " ><span className="z-20">How do I register on ByteSkill?</span></h6>
                                <span className={`transform ${openAccordion === 2 ? 'rotate-180' : 'rotate-0'} transition-transform`}>
                                    <div className=''>
                                        <MdOutlineKeyboardArrowDown className='accordianIcon'></MdOutlineKeyboardArrowDown>
                                    </div>
                                </span>
                            </div>
                            {openAccordion === 2 && (
                                <div >
                                    <p className='paratext' >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam.</p>
                                </div>
                            )}

                        </div>

                        {/* items three */}
                        <div className="accordianMainParent">
                            <div
                                className="accordianSingleParent"
                                onClick={() => toggleAccordion(3)}
                            >
                                <h6 className="accordianHeadText relative z-20 " ><span className="z-20">Do ByteSkill courses come with certificates?</span></h6>
                                <span className={`transform ${openAccordion === 3 ? 'rotate-180' : 'rotate-0'} transition-transform`}>
                                    <div className=''>
                                        <MdOutlineKeyboardArrowDown className='accordianIcon'></MdOutlineKeyboardArrowDown>
                                    </div>
                                </span>
                            </div>
                            {openAccordion === 3 && (
                                <div >
                                    <p className='paratext' >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam.</p>
                                </div>
                            )}

                        </div>

                        {/* items four */}
                        <div className="accordianMainParent">
                            <div
                                className="accordianSingleParent"
                                onClick={() => toggleAccordion(4)}
                            >
                                <h6 className="accordianHeadText relative z-20 " ><span className="z-20">Is there tutor support available on ByteSkill?</span></h6>
                                <span className={`transform ${openAccordion === 4 ? 'rotate-180' : 'rotate-0'} transition-transform`}>
                                    <div className=''>
                                        <MdOutlineKeyboardArrowDown className='accordianIcon'></MdOutlineKeyboardArrowDown>
                                    </div>
                                </span>
                            </div>
                            {openAccordion === 4 && (
                                <div >
                                    <p className='paratext' >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam.</p>
                                </div>
                            )}

                        </div>

                        {/* items five */}
                        <div className="accordianMainParent">
                            <div
                                className="accordianSingleParent"
                                onClick={() => toggleAccordion(5)}
                            >
                                <h6 className="accordianHeadText relative z-20 " ><span className="z-20">How do I make payments for ByteSkill courses?</span></h6>
                                <span className={`transform ${openAccordion === 5 ? 'rotate-180' : 'rotate-0'} transition-transform`}>
                                    <div className=''>
                                        <MdOutlineKeyboardArrowDown className='accordianIcon'></MdOutlineKeyboardArrowDown>
                                    </div>
                                </span>
                            </div>
                            {openAccordion === 5 && (
                                <div >
                                    <p className='paratext' >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam.</p>
                                </div>
                            )}

                        </div>

                        {/* items six */}
                        <div className="accordianMainParent">
                            <div
                                className="accordianSingleParent"
                                onClick={() => toggleAccordion(6)}
                            >
                                <h6 className="accordianHeadText relative z-20 " ><span className="z-20">Are ByteSkill courses suitable for beginners?</span></h6>
                                <span className={`transform ${openAccordion === 6 ? 'rotate-180' : 'rotate-0'} transition-transform`}>
                                    <div className=''>
                                        <MdOutlineKeyboardArrowDown className='accordianIcon'></MdOutlineKeyboardArrowDown>
                                    </div>
                                </span>
                            </div>
                            {openAccordion === 6 && (
                                <div >
                                    <p className='paratext' >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam.</p>
                                </div>
                            )}

                        </div>
                    </div>
                    <div className=' col-span-5 bg-[#1a1a1a] faqSideParent'>
                        <div className='text-center'>
                            <div className='text-center  flex place-content-center 2xl:text-[113px] text-white'>
                                <BiMessageDetail ></BiMessageDetail>
                            </div>
                            <div className='faqSideContentParent'>
                                <h2 className='faqTitle'>Do you have more question?</h2>
                                <p className='faqParaText'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam.</p>
                            </div>
                            <div>
                                <button className='commonBtn'>Contact Us</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Faq;