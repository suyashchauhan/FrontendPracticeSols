import styled from "styled-components";

const RelativeDiv = styled.div`
  position: relative;
  min-height: 100vmax;
`;
const Background = styled.div`
  position: absolute;
  background: ${(props) => props.color};
  top: 0;
  left: ${(props) => (props.left ? "0" : "unset")};
  right: ${(props) => (props.right ? "0" : "unset")};
  height: 100%;
  width: ${(props) => props.width};
`;
const ChildBackground = styled(Background)`
  transform: translate(-50%, 0%);
  left: 50%;
`;
const ImageDiv = styled.div`
  background-image: url(${(props) => props.link});
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-size: cover;
  background-position: 50% 50%;
`;
const ParentToTwoCols = styled.div`
  background: transparent;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
  width: 100%;
`;
function LayerImage(props) {
  const links = [
    "https://ableton-production.imgix.net/about/photo-6-a.jpg?fit=crop",
    "https://ableton-production.imgix.net/about/photo-7.jpg?fit=crop"
  ];
  return (
    <RelativeDiv>
      <ChildBackground color="#d5b3ff" width="64vmin" />
      <ParentToTwoCols>
        <ImageDiv
          link={links[0]}
          width="33.33vmin"
          height="25vmin"
          style={{
            margin: "0 auto"
          }}
        />
        <ImageDiv link={links[1]} width="41.66vmin" height="41.66vmin" />
      </ParentToTwoCols>
    </RelativeDiv>
  );
}
function LayerImage2(props) {
  const links = [
    "https://ableton-production.imgix.net/about/photo-3.jpg?fit=crop",
    "https://ableton-production.imgix.net/about/photo-4.jpg?fit=crop",
    "https://ableton-production.imgix.net/about/photo-5.jpg?fit=crop"
  ];

  return (
    <RelativeDiv>
      <Background color="#b6ffc0" width="60%" left />

      <ParentToTwoCols>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            height: "110vh",
            justifyContent: "space-evenly"
          }}
        >
          <ImageDiv link={links[0]} width="33.33vmin" height="25vmin" />
          <ImageDiv link={links[1]} width="33.33vmin" height="25vmin" />
        </div>
        <div style={{ display: "flex" }}>
          <ImageDiv link={links[2]} width="41.66vmin" height="41.66vmin" />
        </div>
      </ParentToTwoCols>
    </RelativeDiv>
  );
}

function LayerImage3(props) {
  const links = [
    "https://ableton-production.imgix.net/about/photo-1.jpg?fit=crop",
    "https://ableton-production.imgix.net/about/photo-2.jpg?fit=crop"
  ];
  return (
    <RelativeDiv>
      <Background width="60%" color="#fbffa7" right />
      <ParentToTwoCols>
        <ImageDiv link={links[0]} width="41.66vmin" height="41.66vmin" />
        <ImageDiv link={links[1]} width="33.33vmin" height="25vmin" />
      </ParentToTwoCols>
    </RelativeDiv>
  );
}
export { LayerImage, LayerImage2, LayerImage3 };
