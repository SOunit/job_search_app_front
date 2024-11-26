import Card from "../../atoms/card";
import classes from "./job-card.module.css";
import { Link } from "react-router-dom";

const JobCard = (props) => {
  return (
    <Link
      to={`/jobs/detail/${props.job.id}`}
      className={classes["JobCard__link"]}
    >
      <Card className={`${classes[componentName]} ${props.className}`}>
        <h2 className={classes["JobCard__title"]}>{props.job.title}</h2>
        <p className={classes["JobCard__title"]}>{props.job.componentName}</p>
        <p className={classes["JobCard__title"]}>{props.job.city}</p>
        <p className={classes["JobCard__title"]}>{props.job.payment}</p>
        <p className={classes["JobCard__title"]}>{props.job.description}</p>
        <div>
          {props.job.skills.map((skill) => (
            <div key={skill.id}>{skill.title}</div>
          ))}
        </div>
      </Card>
    </Link>
  );
};

const componentName = "JobCard";

export default JobCard;
