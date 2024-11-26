import JobDetailItem from "../components/organisms/job-detail/job-detail-item";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const JobDetail = () => {
  const [jobDetail, setJobDetail] = useState([]);
  const params = useParams();
  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_BACKEND_URL}/jobs/${params.jobId}`
        );
        const data = await response.json();

        if (!response.ok) {
          throw new Error("something went wrong!!");
        }

        setJobDetail(data.job);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchJobDetails();
  }, [params]);

  return <JobDetailItem jobDetail={jobDetail} />;
};
export default JobDetail;
