import React, { useState, Suspense, useEffect, useRef } from "react";
import "./App.scss";
const Spline = React.lazy(() => import("@splinetool/react-spline"));

function App() {
  const [scroll, setScroll] = useState(0);
  const [loading, setLoading] = useState(false);

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
              <h1 className={scroll < 30 ? "showText" : "hiddentext"}>
                PureTone
              </h1>
              <p className={scroll < 30 ? "showText" : "hiddentext"}>
                Une expérience d'écoute supérieure
              </p>
            </div>
            <div
              className={`section-2 ${
                scroll > 94 && scroll < 124
                  ? "showContainer"
                  : "hiddenContainer"
              }`}
            >
              <h1>Les meilleurs composants du marché</h1>
              <ul>
                <li
                  className={` ${
                    scroll > 94 && scroll < 124 ? "showText" : "hiddentext"
                  }`}
                >
                  Un son cristallin et équilibré
                </li>
                <li
                  className={` ${
                    scroll > 94 && scroll < 124 ? "showText" : "hiddentext"
                  }`}
                >
                  Sans interruption ou décalage audio
                </li>
                <li
                  className={` ${
                    scroll > 94 && scroll < 124 ? "showText" : "hiddentext"
                  }`}
                >
                  Jusqu'à 8 heures d'écoute continue
                </li>
              </ul>
            </div>
            <div
              className={`section-3 ${
                scroll >= 200 ? "showContainer" : "hiddenContainer"
              }`}
            >
              <h1>Selon vos gouts</h1>
            </div>
          </>
        )}
        <Spline
          onLoad={(e) => {
            console.log("load", e);
          }}
          className="scene"
          scene="https://prod.spline.design/BZqGolZZ5yYGm8Z3/scene.splinecode"
        />
      </Suspense>
    </div>
  );
}

export default App;
