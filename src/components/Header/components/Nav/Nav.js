
import Logo from '../../../UI/Logo/Logo';
import NavLinks from '../NavLinks/NavLinks';
import classes from './Nav.module.scss'

const Nav = ({open, openModal}) => {
  return (<nav className={classes.Nav}>
      <Logo/>
      <NavLinks pages={true}/>
      {/* <NavLinks pages={false} open={open}  openModal={openModal}/> */}
    </nav>
  )
}

export default Nav;