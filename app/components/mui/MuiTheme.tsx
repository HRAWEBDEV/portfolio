'use client';
import { ReactNode, useMemo } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useAppThemeConfigContext } from '@/app/services/app-theme-config/appThemeConfig';
import { breakpoints } from './breakpoints';
import { typography } from './typography';
import { pallete } from './pallete';
import { components } from './components';

export default function MuiTheme({ children }: { children: ReactNode }) {
 const { activeLocale, mode } = useAppThemeConfigContext();
 const muiTheme = useMemo(
  () =>
   createTheme({
    spacing: (factor: number) => `${0.25 * factor}rem`,
    direction: activeLocale.dir,
    breakpoints,
    typography,
    components,
    palette: { mode, ...pallete },
   }),
  [activeLocale.dir, mode]
 );
 return <ThemeProvider theme={muiTheme}>{children}</ThemeProvider>;
}
