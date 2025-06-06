import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate } from "react-simple-animate";
import "./styles.scss";

const personalDetails = [
  { label: "Name", value: "Ishant Singh" },
  { label: "Father's Name", value: "Dr. Pramod Kumar Singh" },
  { label: "Age", value: "21" },
  { label: "Gender", value: "Male" },
  { label: "Address", value: "Bilaspur, Chhattisgarh, India" },
  { label: "Nationality", value: "Indian" },
  { label: "Email", value: "ishantsingh925@gmail.com" },
  { label: "Contact No", value: "+91 523" },
];

const jobSummary =
  "I’m a passionate and dedicated student from NIT Raipur with a strong interest in coding and technology. I enjoy solving problems, learning new skills, and working on practical projects. Known for being focused, disciplined, and friendly, I balance my academics with sports and social life. I thrive in teamwork, stay calm under pressure, and am always eager to grow and improve.";

const About = () => {
  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="about__content">
        <div className="about__content__personalWrapper">
          <Animate play duration={1.5} delay={1} start={{ transform: "translateX(-900px)" }} end={{ transform: "translatex(0px)" }}>
            <h3>Student at N.I.T Raipur</h3>
            <p>{jobSummary}</p>
          </Animate>

          <Animate play duration={1.5} delay={1} start={{ transform: "translateX(500px)" }} end={{ transform: "translatex(0px)" }}>
            <h3 className="personalInformationHeaderText">Personal Information</h3>
            <ul>
              {personalDetails.map((item, i) => (
                <li key={i}>
                  <span className="title">{item.label}</span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>

        <div className="about__content__servicesWrapper">
          <Animate play duration={1.5} delay={1} start={{ transform: "translateX(600px)" }} end={{ transform: "translatex(0px)" }}>
            <div className="about__content__servicesWrapper__decorativeShape">
              <img className="logo top" src="/react.png" alt="React" />
              <img className="logo right" src="/html.png" alt="HTML" />
              <img className="logo bottom" src="/css.png" alt="CSS" />
              <img className="logo left" src="/js.png" alt="JavaScript" />

            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};

export default About;
