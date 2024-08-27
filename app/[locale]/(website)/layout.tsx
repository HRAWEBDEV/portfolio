import { ReactNode } from 'react';
import NavigationProvider from './services/NavigationProvider';

export default function layout({ children }: { children: ReactNode }) {
 return (
  <div
   className='text-[0.85rem] lg:text-[0.9rem] bg-background text-foreground'
   style={{ textAlign: 'start' }}
  >
   <NavigationProvider>{children}</NavigationProvider>
  </div>
 );
}
