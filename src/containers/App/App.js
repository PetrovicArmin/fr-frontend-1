import React, { Component, Fragment } from 'react';
import Particles from 'react-tsparticles';
import 'tachyons';
import { loadFull } from "tsparticles";
import FaceRecognition from '../../components/FaceRecognition/FaceRecognition';
import ImageLinkForm from '../../components/ImageLinkForm/ImageLinkForm';
import Logo from '../../components/Logo/Logo';
import Navigation from '../../components/Navigation/Navigation';
import Rank from '../../components/Rank/Rank';
import getClarifaiRequest from '../../helperScripts/ClarifaiFaceRecognition';
import SignIn from '../../components/SignIn/SignIn';
import Register from '../../components/Register/Register';
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
            input: '',
            box: {},
            page: 'sign in' //can be 'sign in', 'register', 'home'
        };
        this.input = '';
    }

    onInputChange = (event) => {
        this.input = event.target.value;
    }

    calculateFaceLocation = (box) => {
        const image = document.getElementById('myImage');
        const width = Number(image.width);
        const height = Number(image.height);

        return {
            leftCol: box.left_col * width,
            topRow: box.top_row * height,
            rightCol: width - (box.right_col * width),
            bottomRow: height - (box.bottom_row * height)
        };
    }

    updateCoordinates = (object) => {
        this.setState({box: object});
    }

    onButtonClick = () => {
        this.setState({ input: this.input });
        fetch(`https://api.clarifai.com/v2/models/face-detection/outputs`, getClarifaiRequest(this.input))
            .then(response => response.text())
            .then(result => {
                //This here will worry about surrounding the face with boundary box on UI
                const boundingBox = JSON.parse(result).outputs[0].data.regions[0].region_info.bounding_box;
                this.updateCoordinates(this.calculateFaceLocation(boundingBox));
            })
            .catch(error => console.log('This is error that I got:', error));
    }

    displayHome = () => {
        return (
            <Fragment>
                <Logo />
                <Rank />
                <ImageLinkForm 
                    onInputChange={this.onInputChange}
                    onButtonClick={this.onButtonClick}
                />
                <FaceRecognition 
                    imageUrl={this.state.input}
                    box={this.state.box}
                /> 
            </Fragment>
        );
    }

    displaySignIn = () => {
        return <SignIn 
                    pageRouter = { this.goToPage }
                />;
    }

    displayRegister = () => {
        return <Register 
                    pageRouter = { this.goToPage }
                />
    }

    goToPage = (page) => { this.setState({ page: page }); }

    render() {
        const particlesInit = async (engine) => {
            await loadFull(engine);
        };
    
        const particlesLoaded = async (container) => {
        };
    
        return (
            <div className="App">
                <Particles className='particles' init={particlesInit} loaded={particlesLoaded} options={optionsObject}/>
                <Navigation currentPage={ this.state.page } pageRouter={ this.goToPage }/>
                {
                    this.state.page === 'home' ? this.displayHome() 
                    :(this.state.page === 'sign in' ? this.displaySignIn() : this.displayRegister())
                }                
            </div>
        );
    }
}

export default App;
