import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import { MdWork } from "react-icons/md";
import { data } from "./utils";
import "./styles.scss";

const Resume = () => {
  const renderSection = (title, items) => (
    <div className="timeline__experience">
      <h3 className="timeline__experience__header-text">{title}</h3>
      <div className="custom-timeline">
        {items.map((item, i) => (
          <div className="timeline-item" key={i}>
            <div className="timeline-icon">
              <MdWork />
            </div>
            <div className="timeline-content">
              <h3>{item.title}</h3>
              <h4>{item.subTitle}</h4>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="resume" className="resume">
      <PageHeaderContent
        headerText="My Resume"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="timeline">
        {renderSection("Position of Responsibility", data.por)}
        {renderSection("Education", data.education)}
        {renderSection("Achievements", data.achievements)}
      </div>
    </section>
  );
};

export default Resume;
