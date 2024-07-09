// eslint-disable-next-line no-unused-vars
import React from 'react';
import { FaQuoteLeft } from "react-icons/fa";
import { MdOutlineStarPurple500 } from "react-icons/md";


// https://res.cloudinary.com/dshn2s0tc/image/upload/v1718968249/Edu-den/ceebb0cc0d8271e8955ada66afc6d721_r4qgl5.jpg
const Testimonial = () => {
    return (
        <div>
            <div className='sectionTop'>
                <div className=' bg-[url("https://res.cloudinary.com/dshn2s0tc/image/upload/v1718966970/Edu-den/testimonial_xhonen.png")]
            bg-no-repeat bg-center bg-cover w-[100%] 2xl:h-[629px] '>
                    <div className='grid grid-cols-2  justify-center items-center 2xl:space-x-[120px] h-full leftRightGap '>
                        <div className='text-white bg-[#1a1a1a]  2xl:p-[35px] 2xl:rounded-[10px]'>
                            <div>
                                <div className='flex justify-between items-center'>
                                    <p><FaQuoteLeft className='quoteIcon'></FaQuoteLeft></p>
                                    <div className='flex 2xl:space-x-[3px]'>
                                        <MdOutlineStarPurple500 className='reviewIcon'></MdOutlineStarPurple500>
                                        <MdOutlineStarPurple500 className='reviewIcon'></MdOutlineStarPurple500>
                                        <MdOutlineStarPurple500 className='reviewIcon'></MdOutlineStarPurple500>
                                        <MdOutlineStarPurple500 className='reviewIcon'></MdOutlineStarPurple500>
                                        <MdOutlineStarPurple500 className='reviewIcon'></MdOutlineStarPurple500>
                                    </div>
                                </div>
                                <p className='commonPara 2xl:pt-[15px] 2xl:pb-[35px]'>Ex urna finibus natoque auctor pretium etiam consequat eleifend himenaeos mauris placerat ridiculus odio praesent Ex urna finibus natoque auctor pretium etiam consequat eleifend himenaeos mauris placerat ridiculus odio praesentEx urna finibus natoque auctor pretium etiam consequat eleifend himenaeos mauris placerat ridiculus odio praesent</p>
                                <div>
                                    <div className='tesCardFooterParent'>
                                        <div className='authorImg'>
                                            <img className='h-full w-full object-cover rounded-full' src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1718968249/Edu-den/ceebb0cc0d8271e8955ada66afc6d721_r4qgl5.jpg" alt="" />
                                        </div>
                                        <div>
                                            <h3 className='tesAuthorName'>Nazmul Hasan</h3>
                                            <p className='testAuthorDes'>Graphics Desinger</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className='testimonialText'>Testimonial</p>
                            <h2 className='headingTitle'>What students say</h2>
                            <p className='testiominalParaText'>Ex urna finibus natoque auctor pretium etiam consequat eleifend himenaeos mauris placerat ridiculus odio praesent Ex urna finibus natoque auctor pretium etiam consequat eleifend himenaeos mauris placerat ridiculus odio praesent Ex urna finibus natoque auctor pretium etiam consequat eleifend himenaeos mauris placerat ridiculus odio praesent</p>
                            <div className=''>
                                <button className='commonBtn'>View All Testimonial</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>


    );
};

export default Testimonial;