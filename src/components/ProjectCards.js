import ExersizeCard from "./ExersizeCard";
import QuickNotesCard from "./QuickNotesCard";
import MaterialQuotesCard from "./MaterialQuotesCard";
import React from "react";


const ProjectCard = () => {
  

  return (
    <div className="projectCardContainer">
      <ExersizeCard/>
      <QuickNotesCard/>
      <MaterialQuotesCard/>
    </div>
  );
};

export default ProjectCard;
