import React from "react";
import InfoIcon from "@material-ui/icons/Info";
import "./Widgets.css";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

const Widgets = () => {
  const newArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newArticle("LinkedIn clone is on fire!!!", "Top news - 9000 readers")}
      {newArticle("Coronavirus: BG updates", "Top news - 538 readers")}
      {newArticle("Tesla hits new highs", "Cars & auto - 613 readers")}
      {newArticle("Bitcoin Breaks $22K", "Crypto - 8588 readers")}
      {newArticle("Is Redux too good?", "Code - 601 readers")}
      {newArticle("This is a LinkendIn clone!!!", "Top news - 5646 readers")}
    </div>
  );
};

export default Widgets;
