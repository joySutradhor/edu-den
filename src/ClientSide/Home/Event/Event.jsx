// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { LuClock4 } from "react-icons/lu";
import { SlCalender } from "react-icons/sl";



const Event = () => {
    const [eventData, setEventData] = useState([]);
    console.log(eventData)

    const data = "/eventData.json"


    useEffect(() => {
        fetch(data)
            .then(res => res.json())
            .then(singleData => setEventData(singleData))
    }, [])

    return (
        <div className='leftRightGap sectionTop'>
            <div className='text-center'>
                <h2 className='headingTitle'>Upcoming <span className='textUderline'>Events</span></h2>
                <p className='commonPara 2xl:px-[20%] 2xl:pt-[15px] 2xl:pb-[80px]'>Well, because we’re not your grandma’s boring old school! At Edu-Den, we’re the rebels of education, the mavericks of learning, and the champions of fun-filled knowledge. We’ll teach you how to slay dragons and code websites, all while cracking jokes and sipping on virtual coffee.</p>
            </div>

            <div className='grid grid-cols-3 text-white 2xl:gap-[40px]'>
                {eventData?.map((data, index) => (

                    <div className=' text-white relative' key={index}>
                        <div>
                            <div>
                                <div>
                                    <img src={data.img} alt="" />
                                </div>
                            </div>
                            <div className='absolute bottom-0 text-center'>
                                <h2 className='eventCardTitle'>{data.title}</h2>
                                <p className='eventCardPara'>{data.description}</p>
                                <div className='flex  justify-center items-center 2xl:space-x-[40px] 2xl:pb-[35px]'>
                                    <p className='timeDate'> <LuClock4></LuClock4> {data.time}</p>
                                    <p className='timeDate'> <SlCalender></SlCalender> {data.date}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Event;