import "./styles.css";
import Footer from "./components/Footer";
import BigCard2 from "./components/BigCard2";
import Paragraph from "./components/Paragraph";
import { LayerImage, LayerImage2, LayerImage3 } from "./components/LayerImage";
import HeaderImage from "./components/HeaderImage";
import CustomVideo from "./components/CustomVideo";
import Nav from "./components/Nav4";
import StickyNav from "./components/StickyNav";

import ResponsiveImage from "./components/ResponsiveImage";
export default function App() {
  return (
    <div className="App">
      <Nav />
      <StickyNav />
      <HeaderImage />
      <Paragraph number={0} />
      <LayerImage3 />
      <Paragraph number="1" />
      <CustomVideo />
      <Paragraph number="2" />
      <LayerImage2 />
      <Paragraph number="3" />
      <div style={{ width: "85%", margin: "0 auto" }}>
        <ResponsiveImage
          src="https://ableton-production.imgix.net/about/poster-meet-the-makers.jpg?fit=crop&auto=format&fm=jpg"
          alt="extra"
        />
      </div>
      <Paragraph number="4" />
      <LayerImage />
      <Paragraph number="5" />

      <BigCard2 />
      <div style={{ height: "2px", background: "#eee" }}></div>
      <Footer />
    </div>
  );
}
