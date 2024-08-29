'use client';
import Nav from './Nav';
import Logo from './Logo';
import Tools from './Tools';
import { AnimatePresence } from 'framer-motion';
import { useNavigationContext } from '../../services/navigationContext';
import { type Dic } from '@/app/localization/getDic';

export default function Header({ dic }: { dic: Dic }) {
 const { showNav } = useNavigationContext();
 return (
  <header className='bg-neutral-200 shadow-md'>
   <div className='container flex gap-4 min-h-[--app-header-min-height] justify-between'>
    <Logo />
    <AnimatePresence>{showNav && <Nav />}</AnimatePresence>
    <Tools dic={dic} />
   </div>
  </header>
 );
}
