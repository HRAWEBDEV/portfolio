import { ReactNode } from 'react';
import NavigationProvider from './services/NavigationProvider';
import Header from './components/header/Header';

export default function layout({ children }: { children: ReactNode }) {
 return (
  <div
   className='text-[0.85rem] lg:text-[0.9rem] bg-background text-foreground'
   style={{ textAlign: 'start' }}
  >
   <NavigationProvider>
    <Header />
    {children}
   </NavigationProvider>
  </div>
 );
}
