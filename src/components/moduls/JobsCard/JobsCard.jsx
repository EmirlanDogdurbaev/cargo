import { Link } from "react-router-dom";
import cl from "./JobCard.module.scss"

const JobCard = () => {
  const id = 1;
  return (
    <>
      <article  className={cl.JobCard}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMspfbg9IsWZstWs5iZl85NC3EjKw1pgh7kQ&usqp=CAU"
          alt="article card"
        />
        <div>
          <h4>Lorem, ipsum.</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur,
            illum.
          </p>
          <Link to={`${id}`}>see more</Link>
        </div>
      </article>
    </>
  );
};

export default JobCard;
