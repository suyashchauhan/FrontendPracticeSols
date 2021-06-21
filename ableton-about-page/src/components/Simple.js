import React from "react";
import SignUpInput from "./SignUpInput";
import CustomSelect from "./CustomSelect";
import styled from "styled-components";
const Flexbox = styled.div`
  display: flex;
  gap: 0.8rem;
  margin-top: 1rem;
`;
const SvgWrapper = styled.div`
  width: 40px;
  height: 40px;
  background: ${(props) => props.color};
`;
export default class Simple extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    switch (this.props.head) {
      case "":
        return (
          <div>
            <CreateSimple child={this.props.child} />
            <Flexbox>
              <SvgWrapper color="blue">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 40 40"
                  role="img"
                  focusable="false"
                >
                  <title>Facebook</title>
                  <path
                    d="M33.334 20a13.333 13.333 0 10-15.417 13.167v-9.312h-3.385V20h3.385v-2.933c0-3.342 1.991-5.187 5.036-5.187a20.5 20.5 0 012.985.26v3.277h-1.681a1.927 1.927 0 00-2.173 2.082v2.5h3.7l-.591 3.854h-3.109v9.314A13.337 13.337 0 0033.334 20z"
                    fill="#fff"
                  ></path>
                  <path
                    d="M25.19 23.854L25.781 20h-3.7v-2.5a1.927 1.927 0 012.173-2.082h1.681v-3.283a20.5 20.5 0 00-2.985-.26c-3.046 0-5.036 1.846-5.036 5.188v2.938h-3.383v3.854h3.385v9.32a13.473 13.473 0 004.167 0v-9.317z"
                    fill="#3477f2"
                  ></path>
                </svg>
              </SvgWrapper>
              <SvgWrapper color="lightBlue">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 40 40"
                  role="img"
                  focusable="false"
                >
                  <title>Twitter</title>
                  <path
                    d="M15.362 30.159a14.5 14.5 0 0014.594-14.594c0-.222 0-.443-.015-.663a10.436 10.436 0 002.559-2.655 10.238 10.238 0 01-2.946.807 5.147 5.147 0 002.255-2.837 10.279 10.279 0 01-3.257 1.245 5.134 5.134 0 00-8.741 4.678A14.562 14.562 0 019.24 10.781a5.133 5.133 0 001.588 6.847 5.091 5.091 0 01-2.328-.642v.065a5.131 5.131 0 004.115 5.028 5.121 5.121 0 01-2.316.088 5.135 5.135 0 004.792 3.562 10.292 10.292 0 01-6.37 2.2 10.441 10.441 0 01-1.221-.074 14.521 14.521 0 007.862 2.3"
                    fill="#fff"
                  ></path>
                </svg>
              </SvgWrapper>
              <SvgWrapper color="red">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 40 40"
                  role="img"
                  focusable="false"
                >
                  <title>Youtube</title>
                  <path
                    d="M32.776 13.601a3.351 3.351 0 00-2.358-2.373C28.339 10.667 20 10.667 20 10.667s-8.339 0-10.418.561a3.351 3.351 0 00-2.358 2.373 35.146 35.146 0 00-.557 6.46 35.146 35.146 0 00.557 6.46 3.351 3.351 0 002.358 2.373c2.08.561 10.418.561 10.418.561s8.339 0 10.418-.561a3.351 3.351 0 002.358-2.373 35.146 35.146 0 00.557-6.46 35.146 35.146 0 00-.557-6.46z"
                    fill="#fff"
                  ></path>
                  <path
                    d="M17.273 24.025l6.97-3.961-6.97-3.969z"
                    fill="#ff001d"
                  ></path>
                </svg>
              </SvgWrapper>
              <SvgWrapper color="orange">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 40 40"
                  role="img"
                  focusable="false"
                >
                  <title>Instagram</title>
                  <g transform="translate(-336 -285)">
                    <path
                      d="M356 294.069c3.56 0 3.982.014 5.388.078a7.38 7.38 0 012.476.459 4.416 4.416 0 012.53 2.53 7.38 7.38 0 01.459 2.476c.064 1.406.078 1.828.078 5.388s-.014 3.982-.078 5.388a7.38 7.38 0 01-.459 2.476 4.416 4.416 0 01-2.53 2.53 7.38 7.38 0 01-2.476.459c-1.406.064-1.827.078-5.388.078s-3.982-.014-5.388-.078a7.38 7.38 0 01-2.476-.459 4.416 4.416 0 01-2.53-2.53 7.38 7.38 0 01-.459-2.476c-.064-1.406-.078-1.828-.078-5.388s.014-3.982.078-5.388a7.38 7.38 0 01.459-2.476 4.416 4.416 0 012.53-2.53 7.38 7.38 0 012.476-.459c1.406-.064 1.828-.078 5.388-.078m0-2.4c-3.621 0-4.075.015-5.5.08a9.787 9.787 0 00-3.237.62 6.818 6.818 0 00-3.9 3.9 9.787 9.787 0 00-.62 3.237c-.065 1.422-.08 1.876-.08 5.5s.015 4.075.08 5.5a9.787 9.787 0 00.62 3.237 6.818 6.818 0 003.9 3.9 9.787 9.787 0 003.237.62c1.422.065 1.876.08 5.5.08s4.075-.015 5.5-.08a9.787 9.787 0 003.237-.62 6.818 6.818 0 003.9-3.9 9.787 9.787 0 00.62-3.237c.065-1.422.08-1.876.08-5.5s-.015-4.075-.08-5.5a9.787 9.787 0 00-.62-3.237 6.818 6.818 0 00-3.9-3.9 9.787 9.787 0 00-3.237-.62c-1.422-.065-1.876-.08-5.5-.08z"
                      fill="#fff"
                    ></path>
                    <path
                      d="M356 298.153a6.847 6.847 0 106.847 6.847 6.847 6.847 0 00-6.847-6.847zm0 11.291a4.444 4.444 0 114.444-4.444 4.444 4.444 0 01-4.444 4.444z"
                      fill="#fff"
                    ></path>
                    <circle
                      cx="1.6"
                      cy="1.6"
                      r="1.6"
                      transform="translate(361.517 296.283)"
                      fill="#fff"
                    ></circle>
                  </g>
                </svg>
              </SvgWrapper>
            </Flexbox>
          </div>
        );
      case "Language and Location":
        return (
          <div>
            <h4>{this.props.head}</h4>
            <CustomSelect />
          </div>
        );
      case "Sign up to our newsletter":
        return (
          <div className="grid-row-ahead">
            <CreateSimple
              child={this.props.child}
              head={this.props.head}
              arrow={true}
            />
            <SignUpInput />
          </div>
        );
      default:
        return <CreateSimple head={this.props.head} child={this.props.child} />;
    }
  }
}
function CreateSimple(props) {
  return (
    <div>
      {props.head && <h4>{props.head}</h4>}
      {props.child.map((child) => (
        <p style={{ padding: "0.2rem 0" }}>
          {child} {props.arrow ? "" : "›"}
        </p>
      ))}
    </div>
  );
}
