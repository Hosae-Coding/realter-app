import React from 'react';
import Navbar from '../components/Navbar';
import Footer from './section/Footer';
import Sec1 from './section/Sec1';
import Sec2 from './section/Sec2';
import Sec3 from './section/Sec3';

const Home = () => {
   return (
      <main>
         <Sec1 />
         <Sec2 />
         <Sec3 />
         <Footer />
      </main>
   );
};

export default Home;
