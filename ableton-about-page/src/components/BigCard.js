import styled from "styled-components";
import "./css/mediaquery.css";
// const Flexbox = styled.div`
//   max-width: 85%;
//   margin: 0 auto;
//   min-height: 100vh;
//   padding: 8em 0;
//   display: grid;
//   grid-template-columns: 1fr 1fr;
//   align-items: stretch;
//   justify-content: stretch;
// `;
const Flexbox = styled.div`
  max-width: 85%;
  margin: 0 auto;
  min-height: 100vh;
  padding: 8em 0;
  display: flex;
`;
const StyledLink = styled.a`
  text-decoration: none;
  font-weight: 700;
  color: #00f;
  letter-spacing: 1.5px;
`;
const StyledImg = styled.img`
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 0;
  max-width: 100%;
  height: 100%;
  max-height: 80vh;
  line-height: 3rem;
`;
const StyledDiv = styled.div`
  background: #b1c5ff;
  line-height: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export default function BigCard() {
  return (
    <Flexbox className="col-to-row">
      <div>
        <StyledImg
          src="https://ableton-production.imgix.net/about/photo-8.jpg?fit=crop&crop=right"
          alt="library"
        />
      </div>
      <StyledDiv>
        <div style={{ maxWidth: "64%" }}>
          <div>
            <h2
              style={{
                fontWeight: 700,
                letterSpacing: "1.5px"
              }}
            >
              We're really proud of the work we've done so far. But there's so
              much more to come. If you'd like to be a part of it, please join
              us.
            </h2>
          </div>
          <div style={{ marginTop: "2rem" }}>
            <StyledLink href="/jobs">
              <h2>See latest jobs › </h2>
            </StyledLink>
          </div>
        </div>
      </StyledDiv>
    </Flexbox>
  );
}
