import { useState, useEffect } from "react";
import "./css/stickynav.css";
import styled from "styled-components";
const StyledList = styled.ul`
  display: flex;
  list-style: none;
  justify-content: flex-start;
  align-items: center;
`;

export default function StickyNav() {
  const [isHide, setHide] = useState(false);
  const [prev, setPrev] = useState(0);

  const handleScroll = () => {
    // console.log(window.scrollY, prev);
    // console.log("comin");
    // setPrev(20);
    // console.log("coming here ", window.scrollY);
    if (window.scrollY > prev && window.scrollY > window.innerHeight / 2)
      setHide(true);
    else setHide(false);
    setPrev(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prev, isHide]);
  return (
    <div
      className={isHide ? "hide" : ""}
      style={{
        fontSize: "0.9rem",
        background: "rgba(255,255,255,0.9)",
        padding: "0.6rem 1.2rem",
        zIndex: "5",
        position: "static",
        top: 0,
        width: '100%',
        transition: "top 0.5s"
      }}
    >
      <StyledList style={{ fontWeight: 900 }} className="sticky-nav">
        <li style={{ color: "#ff764d", padding: "0 1rem" }}>About</li>
        <li style={{ padding: "0 1rem" }}>Jobs</li>
      </StyledList>
    </div>
  );
}
