import { useHref, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Nav from './Nav/Nav';
import Drawer from './Drawer/Drawer';
import Backdrop from '../../../components/UI/Backdrop/Backdrop';

 const Header = ({ openModal }) => {
  const location = useLocation();
  const url = useHref();
  const [open, setOpen] = useState(false);

  return (
    <header style={location.pathname === '/' ? { height: '110vh' } : { height: '15vh' }}>
      <Nav open={() => setOpen(true)} openModal={openModal} />
    
      <Drawer isOpen={open} close={() => setOpen(false)} />
      <Backdrop close={() => setOpen(false)} isOpen={open} />
    </header>
  );
};

export default Header;