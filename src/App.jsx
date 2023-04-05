import { useState } from "react";

import "./App.css";
import Spline from "@splinetool/react-spline";

function App() {
  const [scroll, setScroll] = useState(0);

  const handleWheel = (e) => {
    console.log("test");
    let variation = parseInt(e.deltaY * 0.01);
    if (scroll <= 0 && variation < 0) {
      variation = 0;
    }
    setScroll((oldValue) => oldValue + variation);
  };

  console.log("scroll", scroll);

  return (
    <div className="app">
      <div className={`section-1 ${scroll < 30 ? "show" : "hidden"}`}>
        <h1>PureTone</h1>
      </div>

      <div
        className={`section-2 ${
          scroll > 180 && scroll < 240 ? "show" : "hidden"
        }`}
      >
        <h1>Composants</h1>
        <p>
          Les écouteurs Bluetooth PureTone sont les meilleurs du marché en
          raison de leurs composants de haute qualité. Les haut-parleurs
          intégrés produisent un son cristallin et équilibré, grâce à leurs
          membranes en graphène qui offrent une réponse rapide et précise. La
          puce Bluetooth intégrée permet une connexion sans fil stable et
          rapide, sans interruption ou décalage audio. De plus, les écouteurs
          PureTone sont équipés d'une batterie longue durée, qui offre jusqu'à 8
          heures d'écoute continue, et se recharge rapidement en seulement 1
          heure grâce à la technologie de charge rapide. La qualité de
          fabrication est également remarquable, avec des matériaux robustes et
          durables pour une utilisation prolongée. Les écouteurs PureTone
          offrent donc une expérience d'écoute supérieure, avec un son de haute
          qualité, une connexion stable et rapide, une longue durée de vie de la
          batterie et une construction solide.
        </p>
      </div>

      <div className={`section-3 ${scroll > 410 ? "show" : "hidden"}`}>
        <h1>Selon vos gouts</h1>
      </div>

      <Spline
        className="scene"
        scene="https://prod.spline.design/BZqGolZZ5yYGm8Z3/scene.splinecode"
        onWheelCapture={handleWheel}
      />
    </div>
  );
}

export default App;
