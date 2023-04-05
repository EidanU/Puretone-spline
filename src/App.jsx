import React, { useState, Suspense } from "react";
import "./App.css";
const Spline = React.lazy(() => import("@splinetool/react-spline"));

function App() {
  const [scroll, setScroll] = useState(0);
  const [loading, setLoading] = useState(true);

  const handleWheel = (e) => {
    let variation = parseInt(e.deltaY * 0.01);
    if (scroll <= 0 && variation < 0) {
      variation = 0;
    }
    setScroll((oldValue) => oldValue + variation);
  };

  return (
    <div className="App">
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
                scroll > 180 && scroll < 240
                  ? "showContainer"
                  : "hiddenContainer"
              }`}
            >
              <h1>les meilleurs composants du marché</h1>
              <ul>
                <li>Un son cristallin et équilibré</li>
                <li>Sans interruption ou décalage audio</li>
                <li>Jusqu'à 8 heures d'écoute continue</li>
              </ul>
              <p></p>
            </div>
            <div
              className={`section-3 ${
                scroll > 410 ? "showContainer" : "hiddenContainer"
              }`}
            >
              <h1>Selon vos gouts</h1>
            </div>
          </>
        )}
        <Spline
          onLoad={(e) => {
            console.log("load", e);
            setLoading(!e.disposed);
          }}
          className="scene"
          scene="https://prod.spline.design/BZqGolZZ5yYGm8Z3/scene.splinecode"
          onWheelCapture={handleWheel}
        />{" "}
      </Suspense>
    </div>
  );
}

export default App;
