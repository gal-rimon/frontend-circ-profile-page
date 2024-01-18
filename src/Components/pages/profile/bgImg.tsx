import "./bgImgStyle.css";
import {
  BgShape1,
  BgShape2,
  BgShape3,
  BgShape4,
  BgShape5,
} from "../../../svg/index.tsx";

export default function BgImg() {
  return (
    <div className="bg-img">
      <div className="ellipse">
        <div className="overlap-group">
          <div className="div"></div>
          <div className="ellipse-2"></div>
          <div className="bg-sahpe-1">
            <BgShape1 color="#8258C7" />
          </div>
          {/* <img className="intersect" src="img/intersect-1-2.svg" /> */}
          <div className="ellipse-3"></div>
          <div className="bg-sahpe-2">
            <BgShape2 color="#F173FC" />
          </div>
          {/* <img className="img" src="img/intersect-2-3.svg" /> */}
          <div className="ellipse-4"></div>
          <div className="bg-sahpe-3">
            <BgShape3 color="#FF7556" />
          </div>
          {/* <img className="intersect-2" src="img/intersect-1-5.svg" /> */}
          <div className="ellipse-5"></div>
          <div className="bg-sahpe-4">
            <BgShape4 color="#FDD282" />
          </div>
          {/* <img className="intersect-3" src="img/intersect-5-6.svg" /> */}
          <div className="ellipse-6"></div>
          <div className="bg-sahpe-5">
            <BgShape5 color="#0BC05C" />
          </div>
          {/* <img className="intersect-4" src="img/intersect-6-7.svg" /> */}
        </div>
        <div className="ellipse-7"></div>
      </div>
    </div>
  );
}
