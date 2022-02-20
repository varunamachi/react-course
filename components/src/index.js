import React from "react";
import ReactDOM from "react-dom";
import faker from "@faker-js/faker";
import CommentDetails from "./CommentDetails";
import ApprovalCard from "./ApprovalButton";

const App = () => {
  return (
    <div className="ui container comments" style={{ margin: "15px" }}>
      <ApprovalCard>
        <CommentDetails
          author="user1"
          time="Today at 6 PM"
          content="This blog is nice!"
          avatar={faker.image.avatar()}
        ></CommentDetails>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetails
          author="user2"
          time="Today at 5 PM"
          content="This blog is nice!!"
          avatar={faker.image.avatar()}
        ></CommentDetails>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetails
          author="user3"
          time="Today at 4 PM"
          content="This blog is nice!!!"
          avatar={faker.image.avatar()}
        ></CommentDetails>
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App></App>, document.querySelector("#root"));
