import React from 'react';
import styles from './Sec3.module.scss';
import { ArrowButton } from '../../components/Buttons';
import Carousel from '../../components/Carousel';

import { SwiperSlide } from 'swiper/react';
import Card from '../../components/Card';

const Sec3 = () => {
   return (
      <section className={styles.section_3}>
         <div className={styles.section_3_title}>
            <h1>Best of Best houst</h1>
            <ArrowButton text="see More" path="buy" />
         </div>

         <div className={styles.cards}>
            <Carousel>
               <SwiperSlide>
                  <Card />
               </SwiperSlide>
            </Carousel>
         </div>
      </section>
   );
};

export default Sec3;
