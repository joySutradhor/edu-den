// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import "./AllCourse.css"
import { FaStar } from 'react-icons/fa';
import { IoIosPeople } from 'react-icons/io';
import { IoMdTime } from "react-icons/io";
import { FaRegComments } from "react-icons/fa";



const AllCourse = () => {

    const [courseData, setCourseData] = useState([]);
    const courseDataUrl = "/courseData.json"
    console.log(courseData)
    useEffect(() => {
        fetch(courseDataUrl)
            .then(res => res.json())
            .then(singleCourseData => setCourseData(singleCourseData))
    }
        , [])


    return (
        <div className='sectionTop leftRightGap'>
            <div className='text-center'>
                <div className='lineParent'>
                    <div className='leftLine'></div><div className='lineInnerText'>Popular Courses</div><div className='leftLine'></div>
                </div>
                <h2 className='headingTitle text-center 2xl:pt-[25px] 2xl:pb-[80px]'>All <span className='textUderline'>Courses</span></h2>
            </div>
            <div >
                <Tabs>
                    <TabList className="bg-transparent text-center flex justify-between items-center 2xl:px-[10%] 2xl:space-x-[20px]">
                        <Tab className="titleSubHeadingEdited">Show All</Tab>
                        <Tab className="titleSubHeadingEdited">Graphicis Design</Tab>
                        <Tab className="titleSubHeadingEdited">Ux/Ui Design</Tab>
                        <Tab className="titleSubHeadingEdited">Web Development</Tab>
                        <Tab className="titleSubHeadingEdited">Mobile App Development</Tab>
                        <Tab className="titleSubHeadingEdited">Programming</Tab>
                        <Tab className="titleSubHeadingEdited">Ethical Hacking</Tab>
                    </TabList>

                    {/* map for show cards */}
                    <TabPanel>
                        <div className='courseCardParent'>
                            {
                                courseData?.map((dataSignle, index) => (
                                    <div key={index} className='relative' >
                                        <div>
                                            <img className='h-full w-ful object-cover' src={dataSignle.img} alt="" />
                                        </div>
                                        <div className='bg-white 2xl:rounded-b-[20px]'>
                                            <div className='2xl:px-[25px]'>
                                                <div className='flex justify-end'>
                                                    <div className='priceParent'>
                                                        <h3 className='courseCardPrice'>{dataSignle.price}</h3>
                                                    </div>
                                                </div>
                                                <div className='titleIconParent'>
                                                    <h3 className='courseCardTitle'>{dataSignle.title}</h3>
                                                    <div className='flex 2xl:space-x-[2px]'>
                                                        <span><FaStar className='courseCardIcon'></FaStar></span>
                                                        <span><FaStar className='courseCardIcon'></FaStar></span>
                                                        <span><FaStar className='courseCardIcon'></FaStar></span>
                                                        <span><FaStar className='courseCardIcon'></FaStar></span>
                                                        <span><FaStar className='courseCardIcon'></FaStar></span>
                                                    </div>
                                                </div>
                                                <div>
                                                    <h3 className='courseSubtitle'>{dataSignle.subtitle}</h3>
                                                    <p className='courseShortDes'>{dataSignle.short_description}</p>
                                                </div>
                                                {/* card footer  */}
                                                <div className='courseCardFooterParent'>
                                                    <span className='courseFooterLikes'><IoIosPeople className='footerLikesIcon' /> {dataSignle.like}</span>

                                                    <span className='courseFooterLikes'><IoMdTime className='footerLikesIcon' /> {dataSignle.time}</span>

                                                    <span className='courseFooterLikes'><FaRegComments className='footerLikesIcon' /> {dataSignle.comment}</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* ========== card hover ========== */}
                                        <div className='absolute bg-[#A8FF57] top-0 w-full h-full 2xl:rounded-[20px] 2xl:px-[25px] 2xl:pt-[25px] opacity-0 hover:opacity-100 transition-opacity duration-500 ease-in-out'>
                                            <div className='hoverCardTitleReviewParent'>
                                                <h3 className='courseCardTitle'>{dataSignle.title}</h3>
                                                <div className='flex 2xl:space-x-[2px]'>
                                                    <span><FaStar className='courseCardIcon'></FaStar></span>
                                                    <span><FaStar className='courseCardIcon'></FaStar></span>
                                                    <span><FaStar className='courseCardIcon'></FaStar></span>
                                                    <span><FaStar className='courseCardIcon'></FaStar></span>
                                                    <span><FaStar className='courseCardIcon'></FaStar></span>
                                                </div>
                                            </div>
                                            <h3 className='hoverCardSubtitle'>{dataSignle.subtitle}</h3>
                                            <p className='hoverCardParaGraph'>{dataSignle.long_description}</p>
                                            <div className='flex justify-between items-center 2xl:pb-[45px]'>
                                                <button className='enrollNow'>Enroll Now</button>
                                                <img src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1719111028/Edu-den/Line_18_jwhr5w.png" alt="" />
                                                <button className='enrollNow'>{dataSignle.price}</button>
                                            </div>
                                            {/* hover card footer  */}
                                            <div className='courseCardFooterParent'>
                                                <span className='courseFooterLikes'><IoIosPeople className='footerLikesIcon' /> {dataSignle.like}</span>

                                                <span className='courseFooterLikes'><IoMdTime className='footerLikesIcon' /> {dataSignle.time}</span>

                                                <span className='courseFooterLikes'><FaRegComments className='footerLikesIcon' /> {dataSignle.comment}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 2</h2>
                    </TabPanel>
                </Tabs>
            </div>
        </div>

    );
};

export default AllCourse;