import React from "react";

const ApprovalCard = (Props) => {
  return (
    <React.Fragment>
      <div className="ui card">
        <div className="content">{Props.children}</div>
        <div className="extra content">
          <div className="ui two buttons">
            <div className="ui basic green button">Approve</div>
            <div className="ui basic red button">Reject</div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ApprovalCard;
