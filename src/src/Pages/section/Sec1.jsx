import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import styles from './Sec1.module.scss';

import { Link } from 'react-router-dom';
import building1 from '../../assets/building1.jpg';
import background from '../../assets/background.png';

const Sec1 = () => {
   const [price, setPrice] = useState('<100k');
   const [location, setLocation] = useState();

   return (
      <section>
         <div className={styles.Navbar}>
            <Navbar BurgerColour={'whitesmoke'} />
         </div>

         <div className={styles.section_1_content}>
            <div className={styles.slogan}>
               <h1>Find your dream house with us</h1>
               <p>
                  Search and find your dream house, Best quality. Only abailable
                  in Real
               </p>

               <div className={styles.search_container}>
                  <div className={styles.location_container}>
                     <span>Location</span>
                     <input
                        type="text"
                        placeholder="Search a Location ..."
                        onChange={(e) => setLocation(e.target.value)}
                     />
                  </div>
                  <div className={styles.price_container}>
                     <span>Price Range</span>
                     <select
                        name="Price"
                        id="price"
                        onChange={(e) => setPrice(e.target.value)}
                     >
                        <option value="<100k">{`<100k`}</option>
                        <option value="100k-200k">100k-200k</option>
                        <option value="200k-500k">200k-500k</option>
                        <option value=">500k">{`>500k`}</option>
                     </select>
                  </div>

                  <button className={styles.btn_search}>
                     <Link to="search">Search</Link>
                  </button>
               </div>
            </div>
            <div className={styles.slogan_image}>
               <img src={building1} alt="building" />
            </div>
         </div>
      </section>
   );
};
export default Sec1;
