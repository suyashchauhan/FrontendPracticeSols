import styled from "styled-components";
import "./css/mediaquery.css";
import "./css/bigcard.css";

const StyledLink = styled.a`
  text-decoration: none;
  font-weight: 700;
  color: #00f;
  letter-spacing: 1.5px;
`;
const BigStyledText = styled.div`
font-weight: 700;
font-size: 1.4rem;
letter-spacing: 1.5px;
`

export default function BigCard2() {
    return (

        <div className='container col-to-row'>
            <div className='wrap'><img className='half' src="https://ableton-production.imgix.net/about/photo-8.jpg?fit=crop&crop=right"
                alt="library"></img>
                <section className='articlename'>
                    <div className="textblock">
                        <BigStyledText
                        >
                            We're really proud of the work we've done so far. But there's so
                            much more to come. If you'd like to be a part of it, please join
                            us.
                        </BigStyledText>
                        <div style={{ marginTop: "2rem" }}>
                            <StyledLink href="/jobs">
                                <h2>See latest jobs › </h2>
                            </StyledLink>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
