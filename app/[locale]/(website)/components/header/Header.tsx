import Nav from './Nav';
import Logo from './Logo';
import Tools from './Tools';
import { type Dic } from '@/app/localization/getDic';

export default function Header({ dic }: { dic: Dic }) {
 return (
  <header className='bg-neutral-200 shadow-md'>
   <div className='container flex gap-4 min-h-[--app-header-min-height]'>
    <Logo />
    <Nav />
    <Tools dic={dic} />
   </div>
  </header>
 );
}
