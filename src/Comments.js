import React from "react";
import faker from "@faker-js/faker";

const Comment = (comment) => {
  return (
    <React.Fragment>
      <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" src={faker.image.avatar()} />{" "}
        </a>
        <div className="content">
          <a href="/" className="author">
            {comment.author}
          </a>
          <div className="metadata">
            <span className="date">{comment.date}</span>
          </div>
          <div className="text"> {comment.comment}</div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Comment;
