import React from 'react';
import Logo from '../../components/Logo/Logo';
import Rank from '../../components/Rank/Rank';
import Navigation from '../../components/Navigation/Navigation';
import Particles from 'react-tsparticles';
import { loadFull } from "tsparticles";
import { useCallback } from "react"; 
import ImageLinkForm from '../../components/ImageLinkForm/ImageLinkForm';
import './App.css';
import 'tachyons';

const optionsObject = {
    fpsLimit: 50,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "repulse",
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: "#ffffff",
      },
      links: {
        color: "#ffffff",
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      collisions: {
        enable: true,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: false,
        speed: 6,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 80,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 5 },
      },
    },
    detectRetina: true,
};

function App() {
    const particlesInit = useCallback(async (engine) => {
        console.log(engine);
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        await console.log(container);
    }, []);

    return (
    <div className="App">
        <Particles className='particles' init={particlesInit} loaded={particlesLoaded} options={optionsObject}/>
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm />
        {/*<FaceRecognition /> //ovaj dio ostaje da idući put dovršimo!*/}

    </div>
  );
}

export default App;
