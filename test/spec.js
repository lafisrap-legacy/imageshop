
global.YAML = require( 'yamljs' );

import rewire from 'rewire';
import { expect, assert } from 'chai';

// Tested modules
const data = rewire('../src/data'),
      store = rewire('../src/store'),
      utils = rewire('../src/utils');

// Private functions to be tested
const correctYaml = data.__get__('correctYaml'),
      parseYaml = data.__get__('parseYaml'),

      convertImageData = store.__get__('convertImageData'),
      convertFrameData = store.__get__('convertFrameData'),
      fillCarousel     = store.__get__('fillCarousel'),

      urlize = utils.__get__('urlize');



process.env.NODE_ENV = 'testing';

const testData = {
  ///////////////////////////////////////////////////////////////////////////////////////////
  // YAML Data
  // Yaml right data
  parseYaml: [{
    in: `
- name: "Digital"
  formats:
    - name: "Web only (1600 x 1000px)"
      description: "Some words to the format"`,
    out: [{
      name: "Digital",
      formats: [{
        name: 'Web only (1600 x 1000px)',
        description: 'Some words to the format'
      }]
    }]
  },{
    in: `
- name: "Digital"
  formats:
  - name: "Web only (1600 x 1000px)"
      description: "Some words to the format"`,
    out: null
  }],

  ///////////////////////////////////////////////////////////////////////////////////////////
  // Convert Data in Image store
  // convertImageData
  imageData: [{
    in: {
      "title": "Images Portfolio",
      "subtitle": "Choose Images here ...",
      "all": "All",
      "images": [
        {
          "id": 1001,
          "largeImage": "bird.jpg",
          "mediumImage": "bird.jpg",
          "smallImage": "bird.jpg",
          "altText": "Alternative text",
          "title": "bird",
          "subtitle": "...",
          "description": "bird,bird,bird,bird,bird",
          "filters": [
            {
              "name": "Nature",
              "topics": [
                "Animals"
              ]
            },
            {
              "name": "Time",
              "topics": [
                "Spring"
              ]
            }
          ],
          "frames": [
            "Digital",
          ],
          "backgroundImage": "bg-1.jpg"
        }
      ]
    },
    out: {
      images: {
        "1001": {
          "imageId": 1001,
          "largeImage": "/startbootstrap/img/gallery/bird.jpg",
          "mediumImage": "/startbootstrap/img/gallery/bird.jpg",
          "smallImage": "/startbootstrap/img/gallery/bird.jpg",
          "alt": "Alternative text",
          "name": "bird",
          "description": "bird,bird,bird,bird,bird",
          "frames": [
            "Digital"
          ],
          "backgroundImage": "/startbootstrap/img/backgrounds/bg-1.jpg"
        }
      },
      portfolio: {
        "title": "Images Portfolio",
        "subtitle": "Choose Images here ...",
        "all": "All",
        "filters": [
          {
            "id": "Nature_2b2f",
            "name": "Nature",
            "topics": [
              "Nature_2b2f",
              "Animals"
            ]
          },
          {
            "id": "Time_e530",
            "name": "Time",
            "topics": [
              "Time_e530",
              "Spring"
            ]
          }
        ],
        "elements": [
          {
            "imageId": 1001,
            "captionTitle": "bird",
            "captionCategory": "...",
            "filters": [
              "Nature_2b2f",
              "Animals",
              "Time_e530",
              "Spring"
            ]
          }
        ]
      } 
    }
  }],

  // frameData
  frameData: [{
    in: [{
        "name": "Digital",
        "formats": [
          {
            "name": "Web only (1600 x 1000px)",
            "description": "\"Some words to the format\"\n",
            "price": 25
          }
        ],
        "maxNumber": 1,
        "canvas": "golden_frame",
        "frameId": "Digital_0b4a"
      }],
    out: {
      "Digital_0b4a": {
        "name": "Digital",
        "formats": [
          {
            "name": "Web only (1600 x 1000px)",
            "description": "\"Some words to the format\"\n",
            "price": 25
          }],
        "maxNumber": 1,
        "canvas": "golden_frame",
        "frameId": "Digital_0b4a"
      }
    }
  }],

  // fillCarousel
  fillCarousel: [{
    in: {
      "imageId": 1001,
      "largeImage": "/startbootstrap/img/gallery/bird.jpg",
      "mediumImage": "/startbootstrap/img/gallery/bird.jpg",
      "smallImage": "/startbootstrap/img/gallery/bird.jpg",
      "alt": "Alternative text",
      "name": "bird",
      "description": "bird,bird,bird,bird,bird",
      "frames": [
        "Digital",
        "Standard Photo Paper",
        "Premium Photo Paper"
      ],
      "backgroundImage": "/startbootstrap/img/backgrounds/bg-1.jpg"
    },
    out: [
      {
        "frameName": "Digital_0b4a",
        "imageId": 1001,
        "backgroundImage": "/startbootstrap/img/backgrounds/bg-1.jpg"
      },
      {
        "frameName": "Standard_Photo_Paper_ae2e",
        "imageId": 1001,
        "backgroundImage": "/startbootstrap/img/backgrounds/bg-1.jpg"
      },
      {
        "frameName": "Premium_Photo_Paper_386d",
        "imageId": 1001,
        "backgroundImage": "/startbootstrap/img/backgrounds/bg-1.jpg"
      }
    ]
  }],

  urlize: [{
    in: "digital",
    out: "digital_e65e"
  },{
    in: "Ädig italä",
    out: "_dig_ital__da44"
  },{
    in: "Photo Paper!",
    out: "Photo_Paper__669b"
  }]

};

describe('Image Shop Test Suite, ', () => {

  describe('parsing and correcting Yaml, ', () => {
    it('parses YAML', () => {
      testData.parseYaml.map( data => expect( parseYaml(data.in) ).to.be.eql(data.out) );
    });
    it('corrects YAML', () => {
      expect( correctYaml('- name: "Digital"\n  formats:') ).to.be.equal('- name: "Digital"\n  formats:');
    });
  });

  describe('converting data in store, ', () => {
    it('imageData', () => {
      testData.imageData.map( data => expect( convertImageData(data.in) ).to.be.eql(data.out) );
    });

    it('frameData', () => {
      testData.frameData.map( data => expect( convertFrameData(data.in) ).to.be.eql(data.out) );
    });

    it('fillCarousel', () => {
      testData.fillCarousel.map( data => expect( fillCarousel(data.in) ).to.be.eql(data.out) );
    });
  });

  describe('utility functions, ', () => {
    it('urlize', () => {
      testData.urlize.map( data => expect( urlize(data.in) ).to.be.eql(data.out) );
    });
  });


});



/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */


/*
import React from 'react';
import { connect } from 'react-redux';
import { expect, assert } from 'chai'
import { shallowWithStore } from 'enzyme-redux';
import { createMockStore } from 'redux-test-utils';

import Carousel from '../components/Carousel'
import Panel from '../components/Carousel/Panel'
 
describe('example shallowWithStore', () => {
  describe('state', () => {
    it('works', () => {
      const expectedState = { test: "ABC" };
      const mapStateToProps = (carousel) => ({
        carousel,
      });
      const ConnectedComponent = connect(mapStateToProps)(Carousel);
      const component = shallowWithStore(<ConnectedComponent />, createMockStore(expectedState));
      expect(component.props().carousel).to.equal(expectedState);
      console.log(component.find(".container-fluid"));
      expect( component.find(Panel)).to.have.length(1);
    });
  });
  
  describe('dispatch', () => {
    it('works', () => {
      const action = {
        type: 'type',
      };
      const mapDispatchToProps = (dispatch) => ({
        dispatchProp() {
          dispatch(action);
        },
      });
      const store = createMockStore();
 
      const ConnectedComponent = connect(undefined, mapDispatchToProps)(Carousel);
      const component = shallowWithStore(<ConnectedComponent />, store);
      component.props().dispatchProp();
      expect(store.isActionDispatched(action)).to.equal(true);
    });
  });
});
*/
/*
import React from 'react'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { mount, shallow } from 'enzyme'
import { expect, assert } from 'chai'
import Carousel from '../components/Carousel'

const reducer = function(state, action) {
  switch( action.type ) {
  case "DEMO_ACTION":
      return state.concat( action.payload );
  }
  
  return state;
}
const wrapper = shallow(<Provider store={createStore(reducer)}><Carousel /></Provider>);

describe('<Carousel />', () => {
  it('renders...', () => {
    expect(wrapper).to.have.length(1);
    expect(wrapper.find(Carousel).shallow().find(".fa")).to.have.length(2);
  });
});

/*
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Carousel from '../components/Carousel';

import { expect } from 'chai';
import { mount, shallow } from 'enzyme';

describe('<Carousel />', () => {
  it('calls componentDidMount', () => {
    const wrapper = mount(<Carousel />);
    expect(Carousel.prototype.componentDidMount.calledOnce).to.equal(true);
  });
});

const reducer = function(state, action) {
  switch( action.type ) {
  case "DEMO_ACTION":
      return state.concat( action.payload );
  }
  
  return state;
}

ReactDOM.render(<Provider store={createStore(reducer)}><App /></Provider>, document.getElementById("container"));
*/

