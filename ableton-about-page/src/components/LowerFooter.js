import styled from "styled-components";
import { FooterLinks } from "./data/fdata";
import "./css/mediaquery.css";
const FlexBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: ${(props) => props.gap};
`;
const SmallH = styled.h6`
  font-size: 0.6rem;
  font-weight: 900;
`;

export default function LowerFooter() {
  return (
    <FlexBox className="col-to-row flex-start">
      <FlexBox gap="1.1rem" className="col-to-row flex-start">
        {FooterLinks.map((el) => (
          <SmallH>{el}</SmallH>
        ))}
      </FlexBox>
      <FlexBox gap="0 0.5rem" className="media-lower-footer-logo-div">
        <h4>Made in Berlin </h4>
        <div>
          <svg
            class="main-nav__logo__image"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            // xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            width="24px"
            height="12px"
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
      </FlexBox>
    </FlexBox>
  );
}
