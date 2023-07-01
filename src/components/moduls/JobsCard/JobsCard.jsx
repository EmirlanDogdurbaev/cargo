import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import cl from "./JobCard.module.scss";

const JobCard = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setJobs(response.data);
      })
      .catch((error) => {
        console.error("Ошибка при получении данных :", error);
      });
  }, []);
  const displayedJobs = jobs.slice(0, 3); 
  return (
    <>
      {displayedJobs.map((job) => (
        <article className={cl.JobCard } key={job.id}>
          <img src={job.img} alt={job.title} />
          <div>
            <h4>{job.title}</h4>
            <p>{job.description}</p>
            <Link to={`${job.id}`}>see more</Link>
          </div>
        </article>
      ))}
    </>
  );
};

export default JobCard;
