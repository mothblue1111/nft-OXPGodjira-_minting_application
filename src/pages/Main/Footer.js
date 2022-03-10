import React from 'react';
import mayc from '../../assets/images/logo.gif';

const Footer = () => {
  return (
    <div className={'flex flex-col md:flex-row justify-center items-center md:items-start bg-primary py-8 px-4 mt-10'}>
      <img alt='MAYC' className={'mr-0 md:mr-10 w-80 md:w-auto'} src={mayc}/>
      <div className={'flex flex-col'}>
        <div className={'text-center md:text-left mt-6 md:mt-0 text-xl md:text-3xl font-bold'}>0xPGodjira</div>
        <div className={'text-center md:text-left text-xl md:text-3xl max-w-2xl'}>A collection of 333 Unique Genesis 0xGodJira on the ethereum blockchain living as NFTs. Generation 2 will be dropped later.</div>
      </div>
    </div>
  )
};

export default Footer;
