import { useContext, createContext } from 'react';
import { OutOfContext } from '@/app/utils/OutOfContext';
import { locales } from '@/app/localization/locales';

type ThemeModes = 'light' | 'dark';
type Langs = keyof typeof locales;

type Props = {
 mode: ThemeModes;
 locale: Langs;
 activeLocale: (typeof locales)[keyof typeof locales];
};

type Actions = {
 changeMode: (theme: ThemeModes) => void;
 changeLocale: (lang: Langs) => void;
};

const appThemeConfigContext = createContext<(Props & Actions) | null>(null);

const useAppThemeConfigContext = () => {
 const value = useContext(appThemeConfigContext);
 if (!value) throw new OutOfContext();
 return value;
};

export {
 type Props,
 type Actions,
 appThemeConfigContext,
 useAppThemeConfigContext,
};
