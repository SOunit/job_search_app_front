import SkillItem from "./job-skill-item";

const SkillList = (props) => {
  console.log(props.jobDetail);
  return (
    <ul>
      {props.jobDetail.skills &&
        props.jobDetail.skills.map((item) => {
          return <SkillItem title={item} />;
        })}
    </ul>
  );
};
export default SkillList;
