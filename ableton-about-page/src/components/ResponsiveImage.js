export default function ResponsiveImage(props) {
  return (
    <img
      style={{ width: "100%", height: "auto" }}
      src={props.src}
      alt={props.altTextu}
    />
  );
}
