import React from "react";
import ImageCard from "./ImageCard";
import "./ImageList.css";

const ImageList = (props) => {
  const imgTags = props.images.map((image) => (
    <ImageCard image={image} key={image.id} />
  ));
  // const imgTags = props.images.map(({ description, id, urls }) => (
  //   <img alt={description} key={id} src={urls.regular}></img>
  // ));
  return <div className="image-list">{imgTags}</div>;
};

export default ImageList;
