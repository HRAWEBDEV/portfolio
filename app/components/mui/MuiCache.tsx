'use client';
import { ReactNode, useMemo } from 'react';
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { useAppThemeConfigContext } from '@/app/services/app-theme-config/appThemeConfig';

const cacheOptions = {
 rtl: {
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
 },
 ltr: {
  key: 'mui',
 },
};

export default function MuiCache({ children }: { children: ReactNode }) {
 const { activeLocale } = useAppThemeConfigContext();
 const activeCache = useMemo(
  () => createCache(cacheOptions[activeLocale.dir]),
  [activeLocale.dir]
 );
 return <CacheProvider value={activeCache}>{children}</CacheProvider>;
}
