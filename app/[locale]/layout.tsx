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
 title: 'HRA portfolio',
 description: 'my portfolio',
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
   <body>
    <AppThemeConfigProvider>
     <MuiCache>
      <MuiTheme>{children}</MuiTheme>
     </MuiCache>
    </AppThemeConfigProvider>
   </body>
  </html>
 );
}
