import styled from "styled-components";
const Container = styled.div`
  width: 85%;
  margin: 0 auto;
`;
const FloatingHeading = styled.h1`
  position: absolute;
  color: #ff764d;
  font-size: 6.8rem;
  letter-spacing: 4px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
export default function HeaderImage() {
  return (
    <div style={{ position: "relative" }}>
      <FloatingHeading>Ableton</FloatingHeading>
      <Container>
        <img
          style={{ width: "100%", height: "auto" }}
          src="https://ableton-production.imgix.net/about/header.jpg?fit=crop&auto=format&fm=jpg"
          alt="extra"
        />
      </Container>
    </div>
  );
}
