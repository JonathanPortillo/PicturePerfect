import React from "react";
import Lightbox from "react-awesome-lightbox";
import "react-awesome-lightbox/build/style.css"; 

const Image = ({ url, title }) => (
    <li className="pop-out">
      <img  src={url} alt={title} />
    </li>
);

export default Image;
