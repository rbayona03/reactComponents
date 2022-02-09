import React from "react";
import ReactDOM from "react-dom";
import Comment from "./Comments";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <React.Fragment>
      <div className="ui container comments">
        <ApprovalCard>
          <Comment author="Sam" date="Today 12:21PM" comment="Hello" />
        </ApprovalCard>
        <ApprovalCard>
          <Comment author="Alex" date="3 Days ago 3:59PM" comment="Great Job" />
        </ApprovalCard>
        <ApprovalCard>
          <Comment author="Jane" date="1/22/22 6:44PM" comment="Nice Work" />
        </ApprovalCard>
      </div>
    </React.Fragment>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
//Props - pass data from parent to child
//component goals - show data to user or react to user interaction...
//...showing updated data
