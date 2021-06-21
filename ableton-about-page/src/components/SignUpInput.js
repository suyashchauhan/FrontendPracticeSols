import styled from "styled-components";
const Divs = styled.div`
  border: none;
  outline: none;
  display: flex;
  margin-top: 1rem;
`;
const StyledInput = styled.input`
  border: none;
  background: #eee;
  padding: 0.5rem 1rem;
  /* flex-grow: 1; */
`;
const StyledButton = styled.button`
  border: none;
  background: #00f;
  color: white;
  padding: 0.8rem 1.6rem;
  font-weight: 900;
`;
export default function SignUpInput() {
  return (
    <Divs>
      <StyledInput type="text" placeholder="Email Address" />
      <StyledButton>Sign up</StyledButton>
    </Divs>
  );
}
