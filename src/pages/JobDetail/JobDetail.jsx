import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import cl from "./JobDetail.module.scss"

const JobDetail = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Ошибка при получении данных:", error);
      });
  }, [id]);
  return (
    <div className={cl.JobDetail}>
     
      <ul>
            <li>
                  <h3>{data.from}</h3>
            </li>
            <li>
                  <h3>{data.to}</h3>
            </li>
            <li>
                  <h3>{data.date}</h3>
            </li>
            <li>
                  <h3>{data.productType}</h3>
            </li>
            <li>
                  <h3>{data.weight}</h3>
            </li> 
            <li>
                  <h3>{data.choose}</h3>
            </li> 
      </ul>
    </div>
  );
};

export default JobDetail;
