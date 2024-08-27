import { type Props } from './appThemeConfig';

const modeName = 'app-mode';
const localeName = 'app-locale';

const getMode = () => localStorage.getItem(modeName) as Props['mode'] | null;

const setMode = (newMode: Props['mode']) =>
 localStorage.setItem(modeName, newMode);

const getLocale = () =>
 localStorage.getItem(localeName) as Props['locale'] | null;

const setLocale = (newLocale: Props['locale']) =>
 localStorage.setItem(localeName, newLocale);

export { getMode, setMode, getLocale, setLocale };
