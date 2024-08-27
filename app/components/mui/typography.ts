import { locales } from '@/app/localization/locales';
import { TypographyOptions } from '@mui/material/styles/createTypography';

declare module '@mui/material/styles' {
 interface TypographyVariants extends Record<keyof typeof locales, string> {}
 interface TypographyVariantsOptions
  extends Record<keyof typeof locales, string> {}
}

export const typography: TypographyOptions = {
 fontFamily: '',
 fa: 'ir-sans, ir-yekan, Arial',
 en: 'en-roboto',
};
