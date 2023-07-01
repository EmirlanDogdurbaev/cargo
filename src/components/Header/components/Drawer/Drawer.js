import Logo from '../../../UI/Logo/Logo';
import NavLinks from '../NavLinks/NavLinks';
import classes from './Drawer.module.scss'


const Drawer = ({isOpen, close}) => {
  return ( <div
  className={classes.Drawer}
  style={{
    transform: isOpen ? 'translateX(0px)': 'translateX(900px)',
  }}>
      <Logo/>
      <NavLinks pages={true} drawer={true} close={close}/>
  </div> );
}
 
export default Drawer