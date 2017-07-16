
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
      reducers         = store.__get__('reducers'),

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


  reducerFetchImages: [{
    in: {
      store: {},
      action: {
        "type": "FETCH_IMAGES",
        "payload": {
          "data": "title: \"Images Portfolio\"\nsubtitle: \"Choose Images here ...\"\nall: \"All\"\nimages:\n  - id: 1001\n    largeImage: \"bird.jpg\"\n    mediumImage: \"bird.jpg\"\n    smallImage: \"bird.jpg\"\n    altText: \"Alternative text\"\n    title: \"bird\"\n    subtitle: \"...\"\n    description: \"bird,bird,bird,bird,bird\"\n    filters:\n      - name: Nature\n        topics:\n          - Animals\n      - name: Time\n        topics:\n          - Spring\n    frames:\n      - Digital\n      - Standard Photo Paper\n      - Premium Photo Paper\n    backgroundImage: bg-1.jpg\n\n",
          "status": 200,
          "statusText": "OK",
          "headers": {
            "date": "Sun, 16 Jul 2017 15:08:41 GMT",
            "cache-control": "public, max-age=0",
            "last-modified": "Sun, 16 Jul 2017 15:07:46 GMT",
            "accept-ranges": "bytes",
            "etag": "W/\"211-15d4bf0eb4f\"",
            "content-length": "529",
            "content-type": "text/yaml; charset=UTF-8"
          },
          "config": {
            "transformRequest": {},
            "transformResponse": {},
            "timeout": 0,
            "xsrfCookieName": "XSRF-TOKEN",
            "xsrfHeaderName": "X-XSRF-TOKEN",
            "maxContentLength": -1,
            "headers": {
              "Accept": "application/json, text/plain, */*"
            },
            "method": "get",
            "url": "/data/images.yaml"
          },
          "request": {}
        }
      }
    },
    out: {
      "images": {
        "1001": {
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
        }
      },
      "portfolio": {
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
      },
      "carousel": [],
      "frames": [],
      "cart": {
        "items": []
      }
    },
  },{
    in: {
      state: {
        "frames": {
          "Digital_0b4a": {
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
          }
        },
      },
      action: {
        "type": "FETCH_IMAGES",
        "payload": {
          "data": "title: \"Images Portfolio\"\nsubtitle: \"Choose Images here ...\"\nall: \"All\"\nimages:\n  - id: 1001\n    largeImage: \"bird.jpg\"\n    mediumImage: \"bird.jpg\"\n    smallImage: \"bird.jpg\"\n    altText: \"Alternative text\"\n    title: \"bird\"\n    subtitle: \"...\"\n    description: \"bird,bird,bird,bird,bird\"\n    filters:\n      - name: Nature\n        topics:\n          - Animals\n      - name: Time\n        topics:\n          - Spring\n    frames:\n      - Digital\n      - Standard Photo Paper\n      - Premium Photo Paper\n    backgroundImage: bg-1.jpg\n\n",
          "status": 200,
          "statusText": "OK",
          "headers": {
            "date": "Sun, 16 Jul 2017 15:08:41 GMT",
            "cache-control": "public, max-age=0",
            "last-modified": "Sun, 16 Jul 2017 15:07:46 GMT",
            "accept-ranges": "bytes",
            "etag": "W/\"211-15d4bf0eb4f\"",
            "content-length": "529",
            "content-type": "text/yaml; charset=UTF-8"
          },
          "config": {
            "transformRequest": {},
            "transformResponse": {},
            "timeout": 0,
            "xsrfCookieName": "XSRF-TOKEN",
            "xsrfHeaderName": "X-XSRF-TOKEN",
            "maxContentLength": -1,
            "headers": {
              "Accept": "application/json, text/plain, */*"
            },
            "method": "get",
            "url": "/data/images.yaml"
          },
          "request": {}
        }
      }
    },
    out: {
      "images": {
        "1001": {
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
        }
      },
      "portfolio": {
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
      },
      "carousel": [{
        "backgroundImage": "/startbootstrap/img/backgrounds/bg-1.jpg",
        "frameName": "Digital_0b4a",
        "imageId": 1001,
      },{
        "backgroundImage": "/startbootstrap/img/backgrounds/bg-1.jpg",
        "frameName": "Standard_Photo_Paper_ae2e",
        "imageId": 1001,
      },{
        "backgroundImage": "/startbootstrap/img/backgrounds/bg-1.jpg",
        "frameName": "Premium_Photo_Paper_386d",
        "imageId": 1001,
      }],
      "frames": {
        "Digital_0b4a": {
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
        }
      }
    },
  }],

  reducerFetchFrames: [{
    in: {
      state: {},
      action: {
        "type": "FETCH_FRAMES",
        "payload": {
          "data": "\n- name: \"Digital\"\n  formats:\n    - name: \"Web only (1600 x 1000px)\"\n      description: >\n        \"Some words to the format\"\n      price: 25.00\n  maxNumber: 1\n  canvas: golden_frame\n\n",
          "status": 200,
          "statusText": "OK",
          "headers": {
            "date": "Sun, 16 Jul 2017 15:19:42 GMT",
            "cache-control": "public, max-age=0",
            "last-modified": "Sun, 16 Jul 2017 15:08:30 GMT",
            "accept-ranges": "bytes",
            "etag": "W/\"b7-15d4bf1966c\"",
            "content-length": "183",
            "content-type": "text/yaml; charset=UTF-8"
          },
          "config": {
            "transformRequest": {},
            "transformResponse": {},
            "timeout": 0,
            "xsrfCookieName": "XSRF-TOKEN",
            "xsrfHeaderName": "X-XSRF-TOKEN",
            "maxContentLength": -1,
            "headers": {
              "Accept": "application/json, text/plain, */*"
            },
            "method": "get",
            "url": "/data/frames.yaml"
          },
          "request": {}
        }
      }
    },
    out: {
      "frames": {
        "Digital_0b4a": {
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
        }
      },
    },
  },{
    in: {
      state: {
        "images": {
          "1001": {
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
          }
        },
      },
      action: {
        "type": "FETCH_FRAMES",
        "payload": {
          "data": "\n- name: \"Digital\"\n  formats:\n    - name: \"Web only (1600 x 1000px)\"\n      description: >\n        \"Some words to the format\"\n      price: 25.00\n  maxNumber: 1\n  canvas: golden_frame\n\n",
          "status": 200,
          "statusText": "OK",
          "headers": {
            "date": "Sun, 16 Jul 2017 15:19:42 GMT",
            "cache-control": "public, max-age=0",
            "last-modified": "Sun, 16 Jul 2017 15:08:30 GMT",
            "accept-ranges": "bytes",
            "etag": "W/\"b7-15d4bf1966c\"",
            "content-length": "183",
            "content-type": "text/yaml; charset=UTF-8"
          },
          "config": {
            "transformRequest": {},
            "transformResponse": {},
            "timeout": 0,
            "xsrfCookieName": "XSRF-TOKEN",
            "xsrfHeaderName": "X-XSRF-TOKEN",
            "maxContentLength": -1,
            "headers": {
              "Accept": "application/json, text/plain, */*"
            },
            "method": "get",
            "url": "/data/frames.yaml"
          },
          "request": {}
        }
      }
    },
    out: {
      "carousel": [{
        "backgroundImage": "/startbootstrap/img/backgrounds/bg-1.jpg",
        "frameName": "Digital_0b4a",
        "imageId": 1001,
      },{
        "backgroundImage": "/startbootstrap/img/backgrounds/bg-1.jpg",
        "frameName": "Standard_Photo_Paper_ae2e",
        "imageId": 1001,
      },{
        "backgroundImage": "/startbootstrap/img/backgrounds/bg-1.jpg",
        "frameName": "Premium_Photo_Paper_386d",
        "imageId": 1001,
      }],
      "frames": {
        "Digital_0b4a": {
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
        }
      },
      "images": {
        "1001": {
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
        }
      },
    },
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
  }],


  fetchImages: [{
    in: "digital",
    out: "digital_e65e"
  }],


  fetchFrames: [{
    in: "digital",
    out: "digital_e65e"
  }],


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

  describe('reducers, ', () => {
    it('FETCH_IMAGES', () => {
      testData.reducerFetchImages.map( data => expect( reducers(data.in.state, data.in.action) ).to.be.eql(data.out) );
    });

    it('FETCH_FRAMES', () => {
      testData.reducerFetchFrames.map( data => expect( reducers(data.in.state, data.in.action) ).to.be.eql(data.out) );
    });
  });

/*
Comming up ... How to test reducers? Encyme?

  describe('reducers, ', () => {
    it('FETCH_IMAGES', () => {
      testData.fetchImages.map( data => expect( urlize(data.in) ).to.be.eql(data.out) );
    });
    it('FETCH_FRAMES', () => {
      testData.fetchFrames.map( data => expect( urlize(data.in) ).to.be.eql(data.out) );
    });
  });
*/
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

