import classes from './404.module.scss'
import { Link, useNavigate } from 'react-router-dom'

const GoBack = () => {
  const navigate = useNavigate()
  return (<div className={classes.GoBack}>
    {/* <div>404</div> */}
    <div className={classes.links}>
      <h1>Страница не найдена</h1>
      <div>
        <Link to='/'>на главную</Link>
        <span onClick={() => navigate(-1)}>назад</span>
      </div>
    </div>
  </div>);
}

export default GoBack