import styled from "styled-components";
import LowerFooter from "./LowerFooter";
import Simple from "./Simple";
import { RowOneheadings, RowTwoheadings, data } from "./data/fdata";
import "./css/mediaquery.css";
const GridLay = styled.div`
  display: grid;
  grid-row-gap: 6rem;
  margin: 2rem 0;
`;
const FooterHeading = styled.h1`
  font-size: 4rem;
  margin-bottom: 4rem;
  margin-top: 6rem;
`;
const FullPage = styled.div`
  min-height: 100vh;
  margin: 0 auto;
  width: 85%;
  letter-spacing: 1.2px;
`;
export default function Footer() {
  return (
    <FullPage>
      <FooterHeading>Ableton</FooterHeading>
      <GridLay className="media-footer">
        {RowOneheadings.map((head) => (
          <Simple head={head} child={data[head]} />
        ))}
        {RowTwoheadings.map((head) => (
          <Simple head={head} child={data[head]} />
        ))}
      </GridLay>
      <LowerFooter />
    </FullPage>
  );
}
