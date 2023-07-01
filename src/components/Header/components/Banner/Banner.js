import classes from './Banner.module.scss'

const Banner = ({img}) => {
  return ( <div className={classes.Banner} style={{
    backgroundImage: `url(${img})`
  }
  }></div> );
}
 
export default Banner;