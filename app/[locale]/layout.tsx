import type { Metadata } from 'next';
import AppThemeConfigProvider from '../services/app-theme-config/AppThemeConfigProvider';
import MuiCache from '../components/mui/MuiCache';
import MuiTheme from '../components/mui/MuiTheme';
import { type AppStaticParams } from '../utils/appStaticParams';
import { locales } from '../localization/locales';
import NavigationProvider from './(website)/services/NavigationProvider';
import '../font-setup.css';
import '../globals.css';
import 'swiper/css';
import 'swiper/css/pagination';

export const metadata: Metadata = {
 title: 'Alin Group',
 description: 'Alin Group webisite',
};

export default function RootLayout({
 children,
 params: { locale },
}: Readonly<
 {
  children: React.ReactNode;
 } & { params: AppStaticParams }
>) {
 const activeLocale = locales[locale];

 return (
  <html lang={activeLocale.langAlias} dir={activeLocale.dir}>
   <body
    className='text-[0.85rem] lg:text-[0.9rem] bg-background text-foreground'
    style={{ textAlign: 'start' }}
   >
    <AppThemeConfigProvider>
     <MuiCache>
      <MuiTheme>
       <NavigationProvider>{children}</NavigationProvider>
      </MuiTheme>
     </MuiCache>
    </AppThemeConfigProvider>
   </body>
  </html>
 );
}
