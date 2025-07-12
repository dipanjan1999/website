import React from "react";
import "./Skills.css";
import awsLogo from "../../assets/images/abf067f3bef03527c829cc1ee52768d5.png";
import pyTorchLogo from "../../assets/images/PyTorch.png";
import devOpsLogo from "../../assets/images/devops.png";
import reactLogo from "../../assets/images/react-2.svg";
import databrickslogo from "../../assets/images/Databricks_idF4fnHpaJ_1.png";
import pythonLogo from "../../assets/images/python-5.svg";

const skills = [
  { name: "AWS", logo: awsLogo },
  { name: "PyTorch", logo: pyTorchLogo },
  { name: "DevOps", logo: devOpsLogo },
  { name: "React", logo: reactLogo },
  { name: "Databricks", logo: databrickslogo},
  { name: "Python", logo: pythonLogo },
];

const Skills = () => {
  return (
    <section className="skills-section">
      <h2 className="skills-title">Skills Shaping Tomorrow</h2>
      <p className="skills-subheading">
        From cutting-edge technologies to core development expertise — these are the capabilities powering our journey into the future.
        </p>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <img src={skill.logo} alt={skill.name} className="skill-logo" />
            <p className="skill-name">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
