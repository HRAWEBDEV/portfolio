import Nav from './Nav';
import Logo from './Logo';
import Tools from './Tools';

export default function Header() {
 return (
  <header className='bg-neutral-200 shadow-md'>
   <div className='container flex gap-4 min-h-[--app-header-min-height]'>
    <Logo />
    <Nav />
    <Tools />
   </div>
  </header>
 );
}
