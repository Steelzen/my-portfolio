import React, { useEffect, useState } from "react";
import axios from "axios";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { introdata, meta, imageUrls } from "../../content_option";
import { Link } from "react-router-dom";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { Preload } from "@react-three/drei";
import ThreeMesh from "../../hooks/threeMesh";

export const Home = () => {
  const [aboutme, setAboutme] = useState([]);
  // To check if the device is mobile
  const isMobile = () => {
    return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  };

  const materials = imageUrls.map((imageUrl) => {
    const texture = new THREE.TextureLoader().load(imageUrl);
    return new THREE.MeshBasicMaterial({ map: texture });
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://steelzen-website.herokuapp.com/mydata/aboutme/list"
        );
        const data = response.data;
        setAboutme(data[0]);
      } catch (error) {
        // Handle error if needed
      }
    }

    fetchData();
  }, []);

  return (
    <HelmetProvider>
      <section id="home" className="home">
        <Helmet>
          <meta charSet="utf-8" />
          <title> {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <div className="intro_sec d-block d-lg-flex align-items-center ">
          <div
            className="h_bg-image order-1 order-lg-2 h-100 "
            style={{ backgroundImage: `url(${introdata.your_img_url})` }}
          ></div>
          <div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center">
            <div className="align-self-center ">
              <div className="intro mx-auto">
                <h2 className="mb-1x">{introdata.title}</h2>
                <h1 className="fluidz-48 mb-1x">
                  <Typewriter
                    options={{
                      strings: [
                        introdata.animated.first,
                        introdata.animated.second,
                        introdata.animated.third,
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 10,
                    }}
                  />
                </h1>
                <p className="mb-1x">{aboutme["introductory"]}</p>
                <div className="intro_btn-action pb-5">
                  <Link to="/portfolio" className="text_2">
                    <div id="button_p" className="ac_btn btn ">
                      My Portfolio
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                  <Link to="/contact">
                    <div id="button_h" className="ac_btn btn">
                      Contact Me
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="techstack-container">
                {!isMobile() &&
                  materials.map((material, index) => (
                    <Canvas
                      key={index}
                      style={{ width: "100px", height: "130px" }}
                      camera={{ position: [0, 0, 5], fov: 50 }}
                    >
                      <ThreeMesh map={material.map} />
                      <Preload all />
                    </Canvas>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </HelmetProvider>
  );
};
