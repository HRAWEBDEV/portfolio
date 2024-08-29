'use client';
import { motion } from 'framer-motion';

export default function Nav() {
 return (
  <motion.nav
   initial={{ x: '100%' }}
   animate={{ x: '0' }}
   exit={{ x: '100%' }}
   transition={{
    ease: 'easeInOut',
    duration: 0.3,
   }}
   className='fixed start-0 w-[100%] top-[--app-header-min-height] bottom-0 bg-neutral-300'
  >
   <ul className='py-4'>
    <li className='flex justify-center py-4 text-lg'>درباره ما</li>
    <li className='flex justify-center py-4 text-lg'>صفحه </li>
    <li className='flex justify-center py-4 text-lg'>درباره ما</li>
   </ul>
  </motion.nav>
 );
}
