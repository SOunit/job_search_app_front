import { useEffect, useState } from "react";
import CreateButton from "../../atoms/create-button";
import Input from "../../atoms/input";
import classes from "./job-form.module.css";

const JobForm = () => {
  const [skillList, setSkillList] = useState([]);
  const [jobTitle, setJobTitle] = useState("");
  const [jobCity, setJobCity] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [payment, setPayment] = useState("");
  const [skills, setSkills] = useState([]);

  const formSubmitHandler = async (event) => {
    event.preventDefault();

    await fetch(`${process.env.REACT_APP_BACKEND_URL}/jobs`, {
      method: "POST",
      body: JSON.stringify({
        title: jobTitle,
        city: jobCity,
        companyName: companyName,
        payment: payment,
        description: jobDescription,
        skills,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  useEffect(() => {
    const fetchSkillList = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_BACKEND_URL}/skills`
        );

        const responseData = await response.json();

        setSkillList(responseData.skills);
      } catch (err) {
        console.log(err);
      }
    };

    fetchSkillList();
  }, []);

  const jobCityHandler = (event) => {
    setJobCity(event.target.value);
  };
  const jobTitleHandler = (event) => {
    setJobTitle(event.target.value);
  };
  const jobDescriptionHandler = (event) => {
    setJobDescription(event.target.value);
  };
  const companyNameHandler = (event) => {
    setCompanyName(event.target.value);
  };
  const paymentHandler = (event) => {
    setPayment(event.target.value);
  };

  // insert checked Skills into skills array
  const inputSkillsHandler = (id, title) => {
    const currentIndex = skills.indexOf(id);
    const newSkills = [...skills];

    if (currentIndex === -1) {
      newSkills.push(title);
    } else {
      newSkills.splice(currentIndex, 1);
    }
    setSkills(newSkills);
  };

  return (
    <form className={classes[componentName]} onSubmit={formSubmitHandler}>
      <div className={classes[`${componentName}__control`]}>
        <Input
          name="Job Title"
          id="title"
          placeholder="title"
          value={jobTitle}
          onChange={jobTitleHandler}
        />
        <Input
          name="Company Name"
          id="companyName"
          placeholder="companyName"
          value={companyName}
          onChange={companyNameHandler}
        />
        <Input
          name="Job City"
          id="city"
          placeholder="city"
          value={jobCity}
          onChange={jobCityHandler}
        />
        <Input
          name="Payment"
          id="payment"
          placeholder="payment"
          value={payment}
          onChange={paymentHandler}
        />
      </div>
      <label>Job Description</label>
      <textarea
        onChange={jobDescriptionHandler}
        value={jobDescription}
      ></textarea>

      {skillList.map((skill) => (
        <div key={skill.id}>
          <input
            type={"checkbox"}
            value={skill.title}
            onChange={() => inputSkillsHandler(skill.id, skill.title)}
          />
          <label>{skill.title}</label>
        </div>
      ))}

      <CreateButton
        title="Add New Job"
        className={classes[`${componentName}__button`]}
      />
    </form>
  );
};

const componentName = "JobForm";

export default JobForm;
