import { moreoption, moreon } from "./data/hdata";
import { useState } from "react";
import styled from "styled-components";
import "./css/nav.css";
const StyledList = styled.ul`
  width: 100%;
  list-style: none;
  align-items: center;
`;
const DropdownButton = styled.button`
outline: none;
border: none;
background: none;
fontWeight: 700;
fontSize: 1.1rem;
`
export default function Nav() {
  const [show, setShow] = useState(false);
  const handleChange = (e) => {
    e.preventDefault();
    setShow(!show);
  };
  return (
    // <div style={{}}>
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "1.2rem"
        }}
      >
        <div style={{ margin: "0 0.4rem" }}>
          <svg
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            // xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            width="67px"
            height="32x"
            viewBox="0 0 45 21"
            enable-background="new 0 0 45 21"
          // xml:space="preserve"
          >
            <g>
              <rect width="3" height="21"></rect>
              <rect x="6" width="3" height="21"></rect>
              <rect x="12" width="3" height="21"></rect>
              <rect x="18" width="3" height="21"></rect>
              <g>
                <rect x="24" y="18" width="21" height="3"></rect>
                <rect x="24" y="12" width="21" height="3"></rect>
                <rect x="24" y="6" width="21" height="3"></rect>
                <rect x="24" width="21" height="3"></rect>
              </g>
            </g>
          </svg>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>


          <StyledList className="media-nav-menu-desktop">
            <li>Live</li>
            <li>Push</li>
            <li>Link</li>
            <li>Shop</li>
            <li>Packs</li>
            <li>Help</li>
            <li>
              <DropdownButton
                onClick={handleChange}
              >
                More {show ? "-" : "+"}
              </DropdownButton>
            </li>
          </StyledList>
          <StyledList className="media-nav-menu-mobile-show">
            <li>
              <DropdownButton
                onClick={handleChange}
              >
                Menu ^
              </DropdownButton>
            </li>
          </StyledList>
        </div>
        <div>
          <StyledList className="media-nav-menu-desktop">
            <li style={{ color: "#00f" }}>Try Live for free</li>
            <li style={{ fontSize: "0.8rem" }}>Log in or register</li>
          </StyledList>
        </div>
      </div>
      <div
        style={{ maxWidth: "85%", margin: "1.6rem" }}
        className={show ? "showMore" : "showLess"}
      >
        <h1 style={{ margin: "1.2rem 0" }}>More on Ableton.com: </h1>
        <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
          {moreon.map((el) => (
            <p>{el}</p>
          ))}
        </div>
        <h1 style={{ margin: "1.5rem 0 0.6rem 0" }}>More from Ableton.com:</h1>

        <div style={{ display: "flex", gap: "1rem", marginBottom: "1.5rem" }}>
          {Object.entries(moreoption).map(([key, value]) => {
            return (
              <div>
                <h2 style={{ padding: "8px 0" }}>{key}</h2>
                <p>{value}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}