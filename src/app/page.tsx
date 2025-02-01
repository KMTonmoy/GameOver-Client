import Banner from '@/components/Banner';
import React from 'react';
import ThreeBlog from './blog/page';
import TopSteamers from '@/components/TopSteamers';
import GamingBlog from './gameing/page';
import Contactus from '@/components/Contactus';

const page = () => {
  return (
    <div>
      <Banner />
      <ThreeBlog />
      <TopSteamers />
      <GamingBlog />
      <Contactus />
    </div>
  );
};

export default page;