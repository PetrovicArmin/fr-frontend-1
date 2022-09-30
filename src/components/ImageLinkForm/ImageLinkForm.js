import React, { Component } from 'react';
import './ImageLinkForm.css';

class ImageLinkForm extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <p className='f3'>{`This software will detect faces on your picture:`}</p>
                <div className='form center ma4 pa4 br3'>
                    <input className='f4 pa2 w-70 center' type="search" placeholder="Enter your image url:"></input>
                    <button className='w-30 grow f4 link ph4 pv2 dib white bg-light-blue'>Detect</button>
                </div>
            </div>
        );
    }
}

export default ImageLinkForm;