import React from 'react';
import './styles.css';
import Home from './home.jpg';
import Facas from './facas.png';
import Campeonato from './campeonato.png';
import Cupons from './cupons.png';

export default function Center() {
  return (
    <main className="content" >
      <img src={Home} alt="home" style={{ width: "100%", height: "100%" }} />
      <div style={{
        position: "absolute",
        zIndex: 1000,
        marginLeft: "20px",
        paddingTop: "20px"
      }}
      >
        <div style={{
          width: "480px",
          backgroundColor: "rgba(114, 133, 63, 0.31)",
          borderRadius: "8px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}>
          News

          <img src={Facas} alt="home" style={{ width: "466px", height: "349px" }} />

          <img src={Campeonato} alt="home" style={{
            width: "466px",
            height: "120px",
            marginBottom: "4px",
            marginTop: "8px"
          }} />

        </div>

        <div style={{
          width: "480px",
          height: "300px",
          backgroundColor: "rgba(114, 133, 63, 0.51)",
          marginTop: "20px"
        }}>
          Coupons Store Keys Market
          <img src={Cupons} alt="home" style={{ width: "480px", height: "140px" }} />
        </div>
      </div>
    </main>
  );
}