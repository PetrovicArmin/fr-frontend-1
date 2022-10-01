import React, { Component } from 'react';
import Particles from 'react-tsparticles';
import 'tachyons';
import { loadFull } from "tsparticles";
import getClarifaiRequest from '../../helperScripts/ClarifaiFaceRecognition';
import ImageLinkForm from '../../components/ImageLinkForm/ImageLinkForm';
import Logo from '../../components/Logo/Logo';
import FaceRecognition from '../../components/FaceRecognition/FaceRecognition';
import Navigation from '../../components/Navigation/Navigation';
import Rank from '../../components/Rank/Rank';
import './App.css';

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
          duration: 1.4,
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
        speed: 3,
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

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ''
        };
        this.input = '';
    }

    onInputChange = (event) => {
        this.input = event.target.value;
    }

    onButtonClick = () => {
        this.setState({ input: this.input });
        fetch(`https://api.clarifai.com/v2/models/face-detection/outputs`, getClarifaiRequest(this.input))
            .then(response => response.text())
            .then(result => {
                //This here will worry about surrounding the face with boundary box on UI
                console.log("Bounding box: ", JSON.parse(result).outputs[0].data.regions[0].region_info.bounding_box) 
            })
            .catch(error => console.log('This is error that I got:', error));
    }

    render() {
        const particlesInit = async (engine) => {
            console.log(engine);
            await loadFull(engine);
        };
    
        const particlesLoaded = async (container) => {
            await console.log(container);
        };
    
        return (
            <div className="App">
                <Particles className='particles' init={particlesInit} loaded={particlesLoaded} options={optionsObject}/>
                <Navigation />
                <Logo />
                <Rank />
                <ImageLinkForm 
                    onInputChange={this.onInputChange}
                    onButtonClick={this.onButtonClick}
                />
                <FaceRecognition 
                    imageUrl={this.state.input}
                /> 
            </div>
        );
    }
}

export default App;
