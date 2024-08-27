import { locales } from './locales';
type Dic = {
 [key: string]: any;
};

const getDic = ({
 locale,
 path,
}: {
 locale: keyof typeof locales;
 path: string;
}) => {
 return import(`./dictionaries/${path}/${locale}.json`).then(
  (module) => module.default
 );
};

export { type Dic, getDic };
