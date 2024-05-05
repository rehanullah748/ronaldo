"use client"
import React, { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

const Questions = () => {
  const [activeId, setActiveId] = useState('');

  const state = [
    {
      id: 1,
      title: 'What goals can ERAKULIS® help me achieve?',
      body: 'ERAKULIS® can create a personalized plan for you for one of the following goals: maintain weight, lose weight, gain muscle, body toning, improve health and pathologies, have a balanced healthy life. In addition, when responding to the fitness survey, you can add the following goals: improve flexibility, improve my posture, improve my stamina.',
    },
    {
      id: 2,
      title: 'Who are the professionals?',
      body: "ERAKULIS®' professionals are professionals recruited by the company, whose profiles are always verified before they register on the platform. The professionals come from a variety of backgrounds in order to meet the different needs of our users.",
    },
    {
      id: 3,
      title: 'What payment methods do we accept?',
      body: 'The payment method accepted depends on the platform used. On the web, ERAKULIS® accepts payment by credit card. When using the app, ERAKULIS® accepts in-app payments on App Store and Play Store.',
    },
    {
      id: 4,
      title: 'How do I upgrade my subscription?',
      body: 'You can upgrade your subscription on the platform you have subscribed. If you have subscribed on our website, you need to access Profile > Subscriptions. If you have subscribed using the mobile app, you need to access More > Settings > Subscriptions.',
    },
  ];

  const ArrowClick = (id) => {
    setActiveId(id);
  };

  return (
    <div className='flex h-screen px-8 lg:px-0 w-full bg-[#F0F8FC]'>
      <div className='lg:flex w-full mt-[80px] lg:mt-[140px] '>
        <div className='w-full lg:w-5/12 '>
          <h1 className='text-[45px] leading-[50px] lg:leading-[85px] lg:text-[70px] text-left lg:text-center font-bold'>Frequent <span className='lg:pl-9'>Questions</span></h1>
        </div>
        <div className='w-full lg:w-7/12 '>
          {state.map((item) => (
            <div key={item.id} className='w-full lg:w-[85%] flex-wrap mt-6'>
              <div className='flex justify-between'>
              <p className='text-[22px] font-semibold'>{item.title}</p>
              {activeId === item.id ? (
                <div>
                  <IoIosArrowUp onClick={() => ArrowClick("")} className='text-gray-500 font-medium cursor-pointer' size={25} />
                  
                </div>
              ) : (
                <div>
              <IoIosArrowDown onClick={() => ArrowClick(item.id)} className='text-gray-500 font-medium cursor-pointer' size={25} />
                </div>
                
              )}
              </div>
              {activeId === item.id && <p className='text-md font-normal'>{item.body}</p>}
             
              <div className='border-t-gray-300 border h-[.5px] w-full block mt-10'></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Questions;
