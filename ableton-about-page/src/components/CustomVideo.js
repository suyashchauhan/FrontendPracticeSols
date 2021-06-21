import "./css/videobutton.css";
import { useState } from "react";
import ResponsiveImage from "./ResponsiveImage";
import styled from "styled-components";
const StyledPara = styled.p`
  font-weight: 700;
  font-size: 0.8rem;
  color: rgba(0, 0, 0, 0.6);
  margin-top: 0.4rem;
`;
export default function CustomVideo(props) {
  const [show, setShow] = useState(false);
  const [url, seturl] = useState("");
  const handleClick = (e) => {
    e.preventDefault();
    setShow(true);
    seturl("https://www.youtube-nocookie.com/embed/9SbnhgjeyXA?autoplay=1");
  };
  return (
    <div className="rel parentVideo">
      <div className="rel">
        <div className={show ? "hide" : ""}>
          <div className="circle" onClick={(e) => handleClick(e)}>
            <div className="triangle "></div>
          </div>
          <ResponsiveImage
            src="https://ableton-production.imgix.net/about/poster-juanpe.jpg?auto=format&fit=crop&fm=jpg&ixjsv=1.1.3&w=653"
            altText="thumbnail"
          />
        </div>
        <div className={!show ? "hide videowrap rel" : "videowrap rel"}>
          <iframe
            width="100%"
            height="367"
            src={url}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <StyledPara>Why Ableton - Juanpe Bolivar</StyledPara>
    </div>
  );
}
