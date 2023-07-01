import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
            <div>
                  <h1>{data.name}</h1>
            </div>
       );
}
 
export default JobDetail;