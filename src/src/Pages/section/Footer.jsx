import React from 'react';
import styles from './Footer.module.scss';
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';
import {
   AiOutlineFacebook,
   AiOutlineInstagram,
   AiOutlineTwitter,
} from 'react-icons/ai';

const Footer = () => {
   return (
      <footer>
         <ul className={styles.brand}>
            <li>
               <span>Real</span>
            </li>
            <li>
               <span>Our Location</span>
            </li>
            <li>
               <span>Contact - playground@gmail.com</span>
            </li>
            <li>
               <div className={styles.socials}>
                  <Link to="/">
                     <AiOutlineInstagram />
                  </Link>
                  <Link to="/">
                     <AiOutlineFacebook />
                  </Link>
                  <Link to="/">
                     <AiOutlineTwitter />
                  </Link>
               </div>
            </li>
         </ul>

         <ul className={styles.services}>
            <li>
               <span>Services</span>
            </li>
            <li>
               <Link to="/about">About</Link>
            </li>
            <li>
               <Link to="/">Location</Link>
            </li>
            <li>
               <Link to="">About Us</Link>
            </li>
         </ul>

         <ul className={styles.support}>
            <li>
               <Link to="/">FAQ's</Link>
            </li>
            <li>
               <Link to="/">Support Center</Link>
            </li>
            <li>
               <Link to="/">Help Center</Link>
            </li>
         </ul>

         <ul className={styles.subscribe}>
            <li>
               <span>Subscribe</span>
            </li>
            <li>
               <p>Subscribe to get the latesr new and promo from us</p>
            </li>
            <li>
               <div className={styles.subscribe_input}>
                  <input type="text" placeholder="Email" />
               </div>
               <button>
                  <BsArrowRight />{' '}
               </button>
            </li>
         </ul>
      </footer>
   );
};

export default Footer;
