'use client'
import React, { useState, useRef, useEffect } from 'react';
import { Base64 } from 'js-base64';
import 'animate.css';

const NavPills = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const [scrollPosition, setScrollPosition] = useState(0);
  const contentRef = useRef(null);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  useEffect(() => {
    if (contentRef.current) {
      const scrollOptions = {
        behavior: 'smooth',
        block: 'end',
      };
      contentRef.current.scrollTo(0, 0);
      contentRef.current.scrollTo(scrollOptions);
      setScrollPosition(contentRef.current.scrollTop);
    }
  }, [activeTab]);

  const encryptId = (id) => {
    const encodedId = Base64.encode(id);
    return encodedId;
  };
  
  const decryptId = (encryptedId) => {
    const decodedId = Base64.decode(encryptedId);
    return decodedId;
  };

  return (
    <div className='flex justify-center md:py-20 lg:py-20 font-sans'>
      <div className='w-95 md:w-98 lg:w-100'>
        <div className='py-10'>
          <h1 className='font-bold border-l-4 border-blue-500 text-3xl sm:text-4xl md:text-3xl'>SKILLS</h1>
        </div>
        <ul className="flex">
          {tabs.map((tab) => (
            <li
              key={tab.id}
              className="-mb-px mr-1"
            >
              <a
                href={`#${encryptId(tab.id)}`}
                onClick={() => handleTabClick(tab.id)}
                className={`py-2 px-4 transition-all ease-in font-bold ${
                  activeTab === tab.id
                    ? 'text-white bg-gradient-to-r from-slate-600 to-slate-500 dark:bg-gradient-to-b dark:from-slate-600 dark:to-slate-500 rounded-3xl font-semibold'
                    : 'text-gray-900 dark:text-slate-200 font-normal'
                }`}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>

        <div ref={contentRef} style={{ scrollTop: scrollPosition }}>
          {tabs.map((tab) => (
            <div
              key={tab.id}
              id={decryptId(tab.id)}
              className={`py-2 ${activeTab === tab.id ? '' : 'hidden'}`}
            >
              {tab.content}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavPills;
