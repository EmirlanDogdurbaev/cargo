import CreateJob from "../../components/moduls/CreateJob/CreateJob";
import JobCard from "../../components/moduls/JobsCard/JobsCard";
import cl from "./Jobs.module.scss"

const Jobs = () => {
  return (
    <div className={cl.Jobs}>
      <JobCard/>
      <CreateJob/>
    </div>
  );
};

export default Jobs;
