import React from "react";
import Accordion from "./components/Accordion";

const items = [
  {
    title: "What is react?",
    content: "React is a frontend JS framework",
  },
  {
    title: "Why use react?",
    content: "Because its nice!",
  },
  {
    title: "How to use react",
    content: "By building different components",
  },
];

export default () => {
  return (
    <div>
      <Accordion items={items}></Accordion>
    </div>
  );
};
