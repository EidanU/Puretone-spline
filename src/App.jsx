import React, { useState, Suspense, useEffect, useRef } from "react";
import "./App.scss";
import ArrowSvg from "./assets/arrow.svg";
const Spline = React.lazy(() => import("@splinetool/react-spline"));

function App() {
  const [scroll, setScroll] = useState(0);
  const [loading, setLoading] = useState(true);
  const [loadCount, setLoadCount] = useState(0);

  useEffect(() => {
    loadCount > 1 && setLoading(false);
  }, [loadCount]);
  const handleWheel = (e) => {
    let variation = parseInt(e.deltaY * 0.01);
    if ((scroll <= 0 && variation < 0) || (scroll >= 200 && variation > 0)) {
      variation = 0;
    }
    setScroll((oldValue) => (oldValue += variation));
  };

  return (
    <div className="App" onWheel={handleWheel}>
      <Suspense fallback={<div>loading app</div>}>
        {loading ? (
          <div className={"loadingContainer"}>
            <div className={"loader"}>
              <span className="stroke"></span>
              <span className="stroke"></span>
              <span className="stroke"></span>
              <span className="stroke"></span>
              <span className="stroke"></span>
              <span className="stroke"></span>
              <span className="stroke"></span>
            </div>
          </div>
        ) : (
          <>
            <div
              className={`section-1 ${
                scroll < 30 ? "showContainer" : "hiddenContainer"
              }`}
            >
              <h1
                className={`gradientText ${
                  scroll < 30 ? "showText" : "hiddentext"
                }`}
              >
                PureTone
              </h1>
              <p className={scroll < 30 ? "showText" : "hiddentext"}>
                Une expérience d'écoute supérieure
              </p>
            </div>

            <div
              className={`section-2 ${
                scroll > 85 && scroll < 124
                  ? "showContainer"
                  : "hiddenContainer"
              }`}
            >
              <div
                className={`title ${
                  scroll > 85 && scroll < 124 ? "showText" : "hiddentext"
                }`}
              >
                <p className={"gradientText"}>Les</p>
                <h1>meilleurs composants</h1>
                <p className={"gradientText"}>du marché</p>
              </div>
              <ul
                className={` ${
                  scroll > 85 && scroll < 124 ? "showText" : "hiddentext"
                }`}
              >
                <li>
                  - Un son <b>cristallin et équilibré</b>
                </li>
                <li>
                  - <b>Sans interruption</b> ou décalage audio
                </li>
                <li>
                  - Jusqu'à <b>8 heures</b> d'écoute continue
                </li>
              </ul>
            </div>

            <div
              className={`section-3 ${
                scroll >= 200 ? "showContainer" : "hiddenContainer"
              }`}
            >
              <h1
                className={`gradientText ${
                  scroll >= 200 ? "showText" : "hiddentext"
                }`}
              >
                Selon vos gouts
              </h1>
            </div>
            <div className="scrollLabel">
              <span>scroll</span>
              <img src={ArrowSvg} />
            </div>
          </>
        )}
        <Spline
          onLoad={(e) => {
            console.log(e);
            setLoadCount((oldV) => (oldV += 1));
          }}
          className="scene"
          scene="https://prod.spline.design/BZqGolZZ5yYGm8Z3/scene.splinecode"
        />
      </Suspense>
    </div>
  );
}

export default App;
