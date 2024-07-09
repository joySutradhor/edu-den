// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';

const PopularCategories = () => {


    const [popularData, setPopularData] = useState([]);
    const popularCategoriesDataUrl = "/popularCategories.json"
    console.log(popularCategoriesDataUrl)
    useEffect(() => {
        fetch(popularCategoriesDataUrl)
            .then(res => res.json())
            .then(singlePopulerData => setPopularData(singlePopulerData))
    }
        , [])

    return (
        <div className='sectionTop leftRightGap'>
            <div className='text-center'>
                <div className='lineParent'>
                    <div className='leftLine'></div><div className='lineInnerText'>Popular Categories</div><div className='leftLine'></div>
                </div>
                <h2 className='headingTitle text-center 2xl:pt-[25px] 2xl:pb-[80px]'>Popular <span className=''>Categories</span></h2>
            </div>
            <div className='grid grid-cols-4'>
                {
                    popularData?.map((popularSigleData , index ) =>(
                        <div key={index} className='bg-[#1a1a1a] 2xl:rounded-[20px] flex flex-col justify-center items-center' style={{ background: index === 0 ? '#A8FF57' : '#1a1a1a' }}>
                                <div className='2xl:pt-[58px] 2xl:pb-[25px]'>
                                    <img src={popularSigleData.icon} alt="" />
                                </div>
                                <h3 className='popularTitle' style={{ color: index === 0 ? 'black' : 'white' }}>{popularSigleData.title}</h3>
                                <p className='popularPara'style={{ color: index === 0 ? 'black' : 'white' }}>{popularSigleData.description}</p>
                                <div className='2xl:pb-[55px]'>
                                    <img src={popularSigleData.line} alt="" />
                                </div>
                        </div>

                    ))
                }
            </div>
        </div>
    );
};

export default PopularCategories;