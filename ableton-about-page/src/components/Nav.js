import { moreoption, moreon } from "./data/hdata";
import { useState } from "react";
import styled from "styled-components";
import { ReactComponent as Logo } from './data/logo.svg';
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
font-weight: 700;
font-size: 1.1rem;
`

export default function Nav() {
    const [show, setShow] = useState(false);
    const [menu, setMenu] = useState(false);
    const handleChange = (e) => {
        e.preventDefault();
        setShow(!show);
    };
    const handleChangeMenu = (e) => {
        e.preventDefault();
        setMenu(!menu);
    };
    return (
        <div style={{ borderBottom: '2px solid #eee'}}>
            <div className={`menu ${menu ? 'menu-active' : ''}`}>
                <div style={{ margin: "0", padding: '0 1.2rem', display: 'flex', gap: '1rem', zIndex: 3 }} className="textColorChange">
                    <Logo fill={menu ? 'white' : 'black'} />
                    <StyledList className="media-nav-menu-mobile-show">
                        <li>
                            <DropdownButton
                                onClick={handleChangeMenu}
                                className={`${menu ? 'textColorChange' : ''}`}
                            >
                                Menu {menu ? '▼' : '▲'}
                            </DropdownButton>
                        </li>
                    </StyledList>
                </div>
                <div
                    className={`relative media-nav-menu-desktop ${menu ? "open" : "close"} textColorChange`}
                    style={{
                        flex: 1,
                        zIndex: '2',
                        justifyContent: "space-between",
                        padding: "0 1.2rem", alignItems: 'center'
                    }}
                >

                    <div style={{ display: "flex", alignItems: "center" }}>

                        <StyledList className="media-nav-menu-desktop">
                            <li>Live</li>
                            <li>Push</li>
                            <li>Link</li>
                            <li>Shop</li>
                            <li>Packs</li>
                            <li>Help</li>
                            <li className='show-big'>
                                <DropdownButton
                                    onClick={handleChange}

                                >
                                    More {show ? "−" : "+"}
                                </DropdownButton>
                            </li>
                        </StyledList>

                    </div>
                    <div
                    >
                        <StyledList className={`media-nav-menu-desktop`}>
                            <li className="free_link">Try Live for free</li>
                            <li style={{ fontSize: "0.8rem" }}>Log in or register</li>
                        </StyledList>
                    </div>
                    <div
                        style={{ maxWidth: "85%" }}
                        className={`show-small `}
                    >
                        <ExtenderContent />
                    </div>
                </div>

            </div>
            <div
                style={{ maxWidth: "85%", margin: '1rem' }}
                className={`${show ? "showMore" : "showLess"} textColorChange extender wra[]`}
            >
                <ExtenderContent />
            </div>
        </div>
    );
}

function ExtenderContent() {
    return (

        <>
            <h1 style={{ margin: "1.2rem 0" }}>More on Ableton.com: </h1>
            <div className="media-nav-menu-desktop2" style={{ display: 'flex', gap: "1rem", marginBottom: "1rem" }}>
                {moreon.map((el) => (
                    <p>{el}</p>
                ))}
            </div>
            <h1 style={{ margin: "1.5rem 0 0.6rem 0" }}>More from Ableton.com:</h1>

            <div  className="width-declare">
                {Object.entries(moreoption).map(([key, value]) => {
                    return (
                        <div>
                            <h2 style={{ padding: "8px 0" }}>{key}</h2>
                            <p>{value}</p>
                        </div>
                    );
                })}
            </div>
        </>)
}