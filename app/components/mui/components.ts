import { Components } from '@mui/material/styles/components';
import { Theme } from '@mui/material/styles/createTheme';

export const components: Components<Omit<Theme, 'components'>> = {
 MuiButtonBase: {
  styleOverrides: {
   root: {
    fontWeight: 'normal',
    fontSize: 'inherit',
   },
  },
 },
 MuiButton: {
  styleOverrides: {
   root: {
    fontWeight: 'normal',
    fontSize: 'inherit',
   },
  },
 },
};
