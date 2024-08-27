'use client';
import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import LanguageIcon from '@mui/icons-material/Language';
import { Theme } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import { useAppThemeConfigContext } from '@/app/services/app-theme-config/appThemeConfig';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { locales } from '@/app/localization/locales';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import { type Dic } from '@/app/localization/getDic';

const buttonDefaultIcons = {
 borderRadius: (theme: Theme) => theme.spacing(2),
 border: (theme: Theme) => `1px solid ${theme.palette.secondary.main}`,
 transition: 'color 0.3s ease, border 0.3s ease',
 '.MuiBadge-badge': {
  transition: 'color 0.3s ease, border 0.3s ease,background-color 0.3s ease',
 },
 '&:hover': {
  color: (theme: Theme) => theme.palette.primary.main,
  borderColor: (theme: Theme) => theme.palette.primary.main,
  '.MuiBadge-badge': {
   backgroundColor: (theme: Theme) => theme.palette.primary.main,
  },
 },
};

export default function Tools({ dic }: { dic: Dic }) {
 const [languagesAnchorEl, setLanguagesAnchorEl] = useState<null | HTMLElement>(
  null
 );
 const isOpen = Boolean(languagesAnchorEl);

 const { changeMode, changeLocale, mode, locale } = useAppThemeConfigContext();
 const activeLocale = locales[locale];

 return (
  <div className='flex items-center gap-2 lg:gap-4'>
   <IconButton
    size='small'
    className='border border-primary'
    sx={buttonDefaultIcons}
   >
    <SearchIcon />
   </IconButton>
   <IconButton size='small' sx={buttonDefaultIcons}>
    <Badge color='secondary' badgeContent={activeLocale.langAlias}>
     <LanguageIcon />
    </Badge>
   </IconButton>
   <IconButton
    size='small'
    sx={buttonDefaultIcons}
    onClick={() => changeMode(mode == 'light' ? 'dark' : 'light')}
   >
    {mode == 'light' ? <DarkModeIcon /> : <LightModeIcon />}
   </IconButton>
   <IconButton size='small' sx={buttonDefaultIcons}>
    <MenuIcon />
   </IconButton>
   <Menu open={isOpen} anchorEl={languagesAnchorEl}>
    <MenuItem></MenuItem>
   </Menu>
  </div>
 );
}
