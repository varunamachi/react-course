import React from "react";
import "./ImageList.css";

const ImageList = (props) => {
  const imgTags = props.images.map(({ description, id, urls }) => (
    <img alt={description} key={id} src={urls.regular}></img>
  ));
  return <div class="image-list">{imgTags}</div>;
};

export default ImageList;
