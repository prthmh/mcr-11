import React from "react";
import "./PageTemplate.css";
import TopBar from "../../components/TopBar/TopBar";
const PageTemplate = ({ children }) => {
  return (
    <div className="template" >
      <div className="navSection">
        <TopBar />
      </div>
      <div className="page_content">{children}</div>
    </div>
  );
};

export default PageTemplate;
