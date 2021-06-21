import styled from "styled-components";
import "./css/mediaquery.css";
import { heading, para } from "./data/Paragraph";
const StyledDiv = styled.div`
  margin: 6rem auto;
  text-align: left;
`;
const StrongBold = styled.a`
  text-decoration: none;
  color: blue;
  word-spacing: 4px;
`;
const StyleHeading = styled.h2`
  margin-bottom: 2rem;
  line-height: 2rem;
`;

export default function Paragraph(props) {
  const num = props.number;
  return (
    <StyledDiv className="media-para">
      {!num ? (
        <StyleHeading>
          We make <StrongBold>Live</StrongBold> ,<StrongBold> Push </StrongBold>
          and
          <StrongBold> Link </StrongBold> — unique software hardware for music
          creation and performance. With these products, our community of users
          creates amazing things.
        </StyleHeading>
      ) : (
        <StyleHeading>{heading[props.number]}</StyleHeading>
      )}
      {para[props.number].map((el) => (
        <p style={{ marginTop: "2rem" }}>{el}</p>
      ))}
    </StyledDiv>
  );
}
