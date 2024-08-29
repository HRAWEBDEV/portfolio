'use client';
import { PropsWithChildren, useMemo, useState, useEffect } from 'react';
import { navigationContext } from './navigationContext';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Theme } from '@mui/material/styles';

export default function NavigationProvider({ children }: PropsWithChildren) {
 const [showNav, setShowNav] = useState(false);
 const [headerIsVisible, setHeaderIsVisible] = useState(true);
 const largeDevice = useMediaQuery((theme: Theme) =>
  theme.breakpoints.down('lg')
 );
 const smallerThanLarge = useMediaQuery((theme: Theme) =>
  theme.breakpoints.down('xl')
 );

 const contextValue = useMemo(
  () => ({
   headerIsVisible,
   showNav,
   setShowNav,
   largeDevice,
   xlargeDevice: smallerThanLarge,
  }),
  [headerIsVisible, smallerThanLarge, showNav, largeDevice]
 );

 useEffect(() => {
  let scrollPosition = 0;
  const limit = 80;
  const windowScrollWatcher = (e: Event) => {
   const bodyTopPosition = document.body.getBoundingClientRect().top;
   const scrollDirection = scrollPosition <= bodyTopPosition ? 'up' : 'down';
   const scrollChange = Math.abs(
    Math.abs(scrollPosition) - Math.abs(bodyTopPosition)
   );
   if (scrollChange >= limit) {
    scrollPosition = bodyTopPosition;
    setHeaderIsVisible(scrollDirection == 'up' ? true : false);
   }
  };
  window.addEventListener('scroll', windowScrollWatcher);
  return () => window.removeEventListener('scroll', windowScrollWatcher);
 }, []);

 //
 useEffect(() => {
  setShowNav(!largeDevice);
 }, [largeDevice]);

 return (
  <navigationContext.Provider value={contextValue}>
   {children}
  </navigationContext.Provider>
 );
}
