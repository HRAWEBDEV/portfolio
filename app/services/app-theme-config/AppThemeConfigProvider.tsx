'use client';
import { useState, ReactNode, useMemo, useEffect } from 'react';
import { type Props, appThemeConfigContext } from './appThemeConfig';
import { useParams } from 'next/navigation';
import { locales } from '@/app/localization/locales';

export default function AppThemeConfigProvider({
 children,
}: {
 children: ReactNode;
}) {
 const { locale: localeParam } = useParams();
 const [mode, setMode] = useState<Props['mode']>('light');
 const [locale, setLocale] = useState<Props['locale']>(
  localeParam as Props['locale']
 );
 const activeLocale = locales[locale];

 const ctxValue = useMemo(
  () => ({
   mode,
   locale,
   activeLocale,
   changeMode: setMode,
   changeLocale: setLocale,
  }),
  [mode, locale, activeLocale]
 );
 //
 useEffect(() => {
  document.documentElement.setAttribute('data-app-mode', mode);
  document.body.setAttribute('data-app-mode', mode);
 }, [mode]);
 return (
  <appThemeConfigContext.Provider value={ctxValue}>
   {children}
  </appThemeConfigContext.Provider>
 );
}
