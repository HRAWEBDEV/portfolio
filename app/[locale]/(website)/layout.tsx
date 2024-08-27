import { ReactNode } from 'react';
import NavigationProvider from './services/NavigationProvider';
import Header from './components/header/Header';
import { getDic } from '@/app/localization/getDic';
import { type SupportedLocals } from '@/app/localization/locales';

export default async function layout({
 children,
 params: { locale },
}: {
 children: ReactNode;
 params: { locale: SupportedLocals };
}) {
 const internalDic = await getDic({ locale, path: 'internal' });

 return (
  <div
   className='text-[0.85rem] lg:text-[0.9rem] bg-background text-foreground'
   style={{ textAlign: 'start' }}
  >
   <NavigationProvider>
    <Header dic={internalDic} />
    {children}
   </NavigationProvider>
  </div>
 );
}
