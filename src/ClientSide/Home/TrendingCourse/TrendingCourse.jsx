// eslint-disable-next-line no-unused-vars
import React from 'react';

const TrendingCourse = () => {
    return (
        <div className='sectionTop leftRightGap'>
            <div className='flex justify-between items-center 2xl:space-x-[312px] 2xl:pb-[80px]'>
                <h2 className='headingTitle  '> Trending <br />
                    <span className='textUderline'>Courses</span></h2>
                <p className='trendingHeadingPara'>Well, because we’re not your grandma’s boring old school! At Edu-Den, we’re the rebels of education, the mavericks of learning, and the champions of fun-filled knowledge. We’ll teach you how to slay dragons and code websites, all while cracking jokes and sipping on virtual coffee. So, why settle for snooze-worthy lectures when you can join the Edu-Den revolution? Let’s make learning epic together!Well, because we’re not your grandma’s boring old school! At Edu-Den, we’re the rebels of education, the mavericks of learning.</p>
            </div>
            <div className='grid grid-cols-2 '>
                <div className='relative'>
                    <div>
                        <img src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1719112806/Edu-den/Rectangle_108_rc89on.png" alt="" />
                    </div>
                    <div className='absolute bottom-0 2xl:pl-[25px] 2xl:pb-[25px]'>
                        <h2 className='trendingCardTile'>Cyber Security</h2>
                        <img className='cursor-pointer' src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1719112990/Edu-den/Line_16_xf2yt7.png" alt="" />
                    </div>
                </div>
                <div className='grid grid-cols-2 2xl:gap-x-[20px] 2xl:gap-y-[20px]'>
                    <div className='relative'>
                        <div>
                            <img src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1719112703/Edu-den/656658fc1337e34f03bd7dc82ae59176_aza5cb.jpg" alt="" />
                        </div>
                        <div className='absolute bottom-0 2xl:pl-[25px] 2xl:pb-[25px]'>
                            <h2 className='trendingCardTile'>Graphic Design </h2>
                            <img className='cursor-pointer' src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1719112990/Edu-den/Line_16_xf2yt7.png" alt="" />
                        </div>
                    </div>
                    {/* card two */}
                    <div className='relative'>
                        <div>
                            <img src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1719112703/Edu-den/Group_30_uyexju.png" alt="" />
                        </div>
                        <div className='absolute bottom-0 2xl:pl-[25px] 2xl:pb-[25px]'>
                            <h2 className='trendingCardTile'>UI/UX Design</h2>
                            <img className='cursor-pointer' src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1719112990/Edu-den/Line_16_xf2yt7.png" alt="" />
                        </div>
                    </div>

                    {/* card three */}
                    <div className='relative'>
                        <div>
                            <img src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1719112702/Edu-den/Rectangle_122_wusmsd.png" alt="" />
                        </div>
                        <div className='absolute bottom-0 2xl:pl-[25px] 2xl:pb-[25px]'>
                            <h2 className='trendingCardTile'>Web Development</h2>
                            <img className='cursor-pointer' src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1719112990/Edu-den/Line_16_xf2yt7.png" alt="" />
                        </div>
                    </div>

                    {/* card four */}
                    <div className='relative'>
                        <div>
                            <img src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1719112703/Edu-den/Rectangle_123_b8brlb.png" alt="" />
                        </div>
                        <div className='absolute bottom-0 2xl:pl-[25px] 2xl:pb-[25px]'>
                            <h2 className='trendingCardTile'>Mobile App Development</h2>
                            <img className='cursor-pointer' src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1719112990/Edu-den/Line_16_xf2yt7.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrendingCourse;