
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';
import React from 'react';
import rewire from 'rewire';

global.YAML = require('yamljs');

// Tested modules
const data = rewire('../src/data');
const store = rewire('../src/store');
const utils = rewire('../src/utils');

// Private functions to be tested
const correctYaml = data.__get__('correctYaml');
const parseYaml = data.__get__('parseYaml');

const convertImageData = store.__get__('convertImageData');
const convertFrameData = store.__get__('convertFrameData');
const fillCarousel = store.__get__('fillCarousel');
const reducers = store.__get__('reducers');

const urlize = utils.__get__('urlize');

// Components to be tested
const PortfolioImageWrapper = rewire('../components/Portfolio/PortfolioImage');
const PortfolioImage = PortfolioImageWrapper.__get__('PortfolioImage');

const PortfolioGridWrapper = rewire('../components/Portfolio/PortfolioGrid');
const PortfolioGrid = PortfolioGridWrapper.__get__('PortfolioGrid');


process.env.NODE_ENV = 'testing';

const testData = {
  //---------------------------------------------------------------------------
  // YAML Data
  // Yaml right data
  parseYaml: [{
    in: `
- name: 'Digital'
  formats:
    - name: 'Web only (1600 x 1000px)'
      description: 'Some words to the format'`,
    out: [{
      name: 'Digital',
      formats: [{
        name: 'Web only (1600 x 1000px)',
        description: 'Some words to the format'
      }]
    }]
  }, {
    in: `
- name: 'Digital'
  formats:
  - name: 'Web only (1600 x 1000px)'
      description: 'Some words to the format'`,
    out: null
  }],

  //----------------------------------------------------------------------------
  // Convert Data in Image store
  // convertImageData
  imageData: [{
    in: {
      title: 'Images Portfolio',
      subtitle: 'Choose Images here ...',
      all: 'All',
      images: [
        {
          id: 1001,
          largeImage: 'bird.jpg',
          mediumImage: 'bird.jpg',
          smallImage: 'bird.jpg',
          altText: 'Alternative text',
          title: 'bird',
          subtitle: '...',
          description: 'bird, bird, bird, bird, bird',
          filters: [
            {
              name: 'Nature',
              topics: [
                'Animals'
              ]
            },
            {
              name: 'Time',
              topics: [
                'Spring'
              ]
            }
          ],
          frames: [
            'Digital'
          ],
          backgroundImage: 'bg-1.jpg'
        }
      ]
    },
    out: {
      images: {
        1001: {
          imageId: 1001,
          largeImage: '/startbootstrap/img/gallery/bird.jpg',
          mediumImage: '/startbootstrap/img/gallery/bird.jpg',
          smallImage: '/startbootstrap/img/gallery/bird.jpg',
          alt: 'Alternative text',
          name: 'bird',
          description: 'bird, bird, bird, bird, bird',
          frames: [
            'Digital'
          ],
          backgroundImage: '/startbootstrap/img/backgrounds/bg-1.jpg'
        }
      },
      portfolio: {
        title: 'Images Portfolio',
        subtitle: 'Choose Images here ...',
        all: 'All',
        filters: [
          {
            id: 'Nature_2b2f',
            name: 'Nature',
            topics: [
              'Nature_2b2f',
              'Animals'
            ]
          },
          {
            id: 'Time_e530',
            name: 'Time',
            topics: [
              'Time_e530',
              'Spring'
            ]
          }
        ],
        elements: [
          {
            imageId: 1001,
            captionTitle: 'bird',
            captionCategory: '...',
            filters: [
              'Nature_2b2f',
              'Animals',
              'Time_e530',
              'Spring'
            ]
          }
        ]
      }
    }
  }],

  // frameData
  frameData: [{
    in: [{
      name: 'Digital',
      formats: [
        {
          name: 'Web only (1600 x 1000px)',
          description: '\'Some words to the format\'\n',
          price: 25
        }
      ],
      maxNumber: 1,
      canvas: 'golden_frame',
      frameId: 'Digital_0b4a'
    }],
    out: {
      Digital_0b4a: {
        name: 'Digital',
        formats: [
          {
            name: 'Web only (1600 x 1000px)',
            description: '\'Some words to the format\'\n',
            price: 25
          }],
        maxNumber: 1,
        canvas: 'golden_frame',
        frameId: 'Digital_0b4a'
      }
    }
  }],

  // fillCarousel
  fillCarousel: [{
    in: {
      imageId: 1001,
      largeImage: '/startbootstrap/img/gallery/bird.jpg',
      mediumImage: '/startbootstrap/img/gallery/bird.jpg',
      smallImage: '/startbootstrap/img/gallery/bird.jpg',
      alt: 'Alternative text',
      name: 'bird',
      description: 'bird, bird, bird, bird, bird',
      frames: [
        'Digital',
        'Standard Photo Paper',
        'Premium Photo Paper'
      ],
      backgroundImage: '/startbootstrap/img/backgrounds/bg-1.jpg'
    },
    out: [
      {
        frameName: 'Digital_0b4a',
        imageId: 1001,
        backgroundImage: '/startbootstrap/img/backgrounds/bg-1.jpg'
      },
      {
        frameName: 'Standard_Photo_Paper_ae2e',
        imageId: 1001,
        backgroundImage: '/startbootstrap/img/backgrounds/bg-1.jpg'
      },
      {
        frameName: 'Premium_Photo_Paper_386d',
        imageId: 1001,
        backgroundImage: '/startbootstrap/img/backgrounds/bg-1.jpg'
      }
    ]
  }],


  reducerFetchImages: [{
    in: {
      store: {},
      action: {
        type: 'FETCH_IMAGES',
        payload: {
          data: 'title: \'Images Portfolio\'\nsubtitle: \'Choose Images here ...\'\nall: \'All\'\nimages:\n  - id: 1001\n    largeImage: \'bird.jpg\'\n    mediumImage: \'bird.jpg\'\n    smallImage: \'bird.jpg\'\n    altText: \'Alternative text\'\n    title: \'bird\'\n    subtitle: \'...\'\n    description: \'bird, bird, bird, bird, bird\'\n    filters:\n      - name: Nature\n        topics:\n          - Animals\n      - name: Time\n        topics:\n          - Spring\n    frames:\n      - Digital\n      - Standard Photo Paper\n      - Premium Photo Paper\n    backgroundImage: bg-1.jpg\n\n',
          status: 200,
          statusText: 'OK',
          headers: {
            date: 'Sun, 16 Jul 2017 15:08:41 GMT',
            'cache-control': 'public, max-age=0',
            'last-modified': 'Sun, 16 Jul 2017 15:07:46 GMT',
            'accept-ranges': 'bytes',
            etag: 'W/\'211-15d4bf0eb4f\'',
            'content-length': '529',
            'content-type': 'text/yaml; charset=UTF-8'
          },
          config: {
            transformRequest: {},
            transformResponse: {},
            timeout: 0,
            xsrfCookieName: 'XSRF-TOKEN',
            xsrfHeaderName: 'X-XSRF-TOKEN',
            maxContentLength: -1,
            headers: {
              Accept: 'application/json, text/plain, */*'
            },
            method: 'get',
            url: '/data/images.yaml'
          },
          request: {}
        }
      }
    },
    out: {
      images: {
        1001: {
          imageId: 1001,
          largeImage: '/startbootstrap/img/gallery/bird.jpg',
          mediumImage: '/startbootstrap/img/gallery/bird.jpg',
          smallImage: '/startbootstrap/img/gallery/bird.jpg',
          alt: 'Alternative text',
          name: 'bird',
          description: 'bird, bird, bird, bird, bird',
          frames: [
            'Digital',
            'Standard Photo Paper',
            'Premium Photo Paper'
          ],
          backgroundImage: '/startbootstrap/img/backgrounds/bg-1.jpg'
        }
      },
      portfolio: {
        title: 'Images Portfolio',
        subtitle: 'Choose Images here ...',
        all: 'All',
        filters: [
          {
            id: 'Nature_2b2f',
            name: 'Nature',
            topics: [
              'Nature_2b2f',
              'Animals'
            ]
          },
          {
            id: 'Time_e530',
            name: 'Time',
            topics: [
              'Time_e530',
              'Spring'
            ]
          }
        ],
        elements: [
          {
            imageId: 1001,
            captionTitle: 'bird',
            captionCategory: '...',
            filters: [
              'Nature_2b2f',
              'Animals',
              'Time_e530',
              'Spring'
            ]
          }
        ]
      },
      carousel: [],
      frames: [],
      cart: {
        items: []
      }
    }
  }, {
    in: {
      state: {
        frames: {
          Digital_0b4a: {
            name: 'Digital',
            formats: [
              {
                name: 'Web only (1600 x 1000px)',
                description: '\'Some words to the format\'\n',
                price: 25
              }
            ],
            maxNumber: 1,
            canvas: 'golden_frame',
            frameId: 'Digital_0b4a'
          }
        }
      },
      action: {
        type: 'FETCH_IMAGES',
        payload: {
          data: 'title: \'Images Portfolio\'\nsubtitle: \'Choose Images here ...\'\nall: \'All\'\nimages:\n  - id: 1001\n    largeImage: \'bird.jpg\'\n    mediumImage: \'bird.jpg\'\n    smallImage: \'bird.jpg\'\n    altText: \'Alternative text\'\n    title: \'bird\'\n    subtitle: \'...\'\n    description: \'bird, bird, bird, bird, bird\'\n    filters:\n      - name: Nature\n        topics:\n          - Animals\n      - name: Time\n        topics:\n          - Spring\n    frames:\n      - Digital\n      - Standard Photo Paper\n      - Premium Photo Paper\n    backgroundImage: bg-1.jpg\n\n',
          status: 200,
          statusText: 'OK',
          headers: {
            date: 'Sun, 16 Jul 2017 15:08:41 GMT',
            'cache-control': 'public, max-age=0',
            'last-modified': 'Sun, 16 Jul 2017 15:07:46 GMT',
            'accept-ranges': 'bytes',
            etag: 'W/\'211-15d4bf0eb4f\'',
            'content-length': '529',
            'content-type': 'text/yaml; charset=UTF-8'
          },
          config: {
            transformRequest: {},
            transformResponse: {},
            timeout: 0,
            xsrfCookieName: 'XSRF-TOKEN',
            xsrfHeaderName: 'X-XSRF-TOKEN',
            maxContentLength: -1,
            headers: {
              Accept: 'application/json, text/plain, */*'
            },
            method: 'get',
            url: '/data/images.yaml'
          },
          request: {}
        }
      }
    },
    out: {
      images: {
        1001: {
          imageId: 1001,
          largeImage: '/startbootstrap/img/gallery/bird.jpg',
          mediumImage: '/startbootstrap/img/gallery/bird.jpg',
          smallImage: '/startbootstrap/img/gallery/bird.jpg',
          alt: 'Alternative text',
          name: 'bird',
          description: 'bird, bird, bird, bird, bird',
          frames: [
            'Digital',
            'Standard Photo Paper',
            'Premium Photo Paper'
          ],
          backgroundImage: '/startbootstrap/img/backgrounds/bg-1.jpg'
        }
      },
      portfolio: {
        title: 'Images Portfolio',
        subtitle: 'Choose Images here ...',
        all: 'All',
        filters: [
          {
            id: 'Nature_2b2f',
            name: 'Nature',
            topics: [
              'Nature_2b2f',
              'Animals'
            ]
          },
          {
            id: 'Time_e530',
            name: 'Time',
            topics: [
              'Time_e530',
              'Spring'
            ]
          }
        ],
        elements: [
          {
            imageId: 1001,
            captionTitle: 'bird',
            captionCategory: '...',
            filters: [
              'Nature_2b2f',
              'Animals',
              'Time_e530',
              'Spring'
            ]
          }
        ]
      },
      carousel: [{
        backgroundImage: '/startbootstrap/img/backgrounds/bg-1.jpg',
        frameName: 'Digital_0b4a',
        imageId: 1001
      }, {
        backgroundImage: '/startbootstrap/img/backgrounds/bg-1.jpg',
        frameName: 'Standard_Photo_Paper_ae2e',
        imageId: 1001
      }, {
        backgroundImage: '/startbootstrap/img/backgrounds/bg-1.jpg',
        frameName: 'Premium_Photo_Paper_386d',
        imageId: 1001
      }],
      frames: {
        Digital_0b4a: {
          name: 'Digital',
          formats: [
            {
              name: 'Web only (1600 x 1000px)',
              description: '\'Some words to the format\'\n',
              price: 25
            }
          ],
          maxNumber: 1,
          canvas: 'golden_frame',
          frameId: 'Digital_0b4a'
        }
      }
    }
  }],

  reducerFetchFrames: [{
    in: {
      state: {},
      action: {
        type: 'FETCH_FRAMES',
        payload: {
          data: '\n- name: \'Digital\'\n  formats:\n    - name: \'Web only (1600 x 1000px)\'\n      description: >\n        \'Some words to the format\'\n      price: 25.00\n  maxNumber: 1\n  canvas: golden_frame\n\n',
          status: 200,
          statusText: 'OK',
          headers: {
            date: 'Sun, 16 Jul 2017 15:19:42 GMT',
            'cache-control': 'public, max-age=0',
            'last-modified': 'Sun, 16 Jul 2017 15:08:30 GMT',
            'accept-ranges': 'bytes',
            etag: 'W/\'b7-15d4bf1966c\'',
            'content-length': '183',
            'content-type': 'text/yaml; charset=UTF-8'
          },
          config: {
            transformRequest: {},
            transformResponse: {},
            timeout: 0,
            xsrfCookieName: 'XSRF-TOKEN',
            xsrfHeaderName: 'X-XSRF-TOKEN',
            maxContentLength: -1,
            headers: {
              Accept: 'application/json, text/plain, */*'
            },
            method: 'get',
            url: '/data/frames.yaml'
          },
          request: {}
        }
      }
    },
    out: {
      frames: {
        Digital_0b4a: {
          name: 'Digital',
          formats: [
            {
              name: 'Web only (1600 x 1000px)',
              description: '\'Some words to the format\'\n',
              price: 25
            }
          ],
          maxNumber: 1,
          canvas: 'golden_frame',
          frameId: 'Digital_0b4a'
        }
      }
    }
  }, {
    in: {
      state: {
        images: {
          1001: {
            imageId: 1001,
            largeImage: '/startbootstrap/img/gallery/bird.jpg',
            mediumImage: '/startbootstrap/img/gallery/bird.jpg',
            smallImage: '/startbootstrap/img/gallery/bird.jpg',
            alt: 'Alternative text',
            name: 'bird',
            description: 'bird, bird, bird, bird, bird',
            frames: [
              'Digital',
              'Standard Photo Paper',
              'Premium Photo Paper'
            ],
            backgroundImage: '/startbootstrap/img/backgrounds/bg-1.jpg'
          }
        }
      },
      action: {
        type: 'FETCH_FRAMES',
        payload: {
          data: '\n- name: \'Digital\'\n  formats:\n    - name: \'Web only (1600 x 1000px)\'\n      description: >\n        \'Some words to the format\'\n      price: 25.00\n  maxNumber: 1\n  canvas: golden_frame\n\n',
          status: 200,
          statusText: 'OK',
          headers: {
            date: 'Sun, 16 Jul 2017 15:19:42 GMT',
            'cache-control': 'public, max-age=0',
            'last-modified': 'Sun, 16 Jul 2017 15:08:30 GMT',
            'accept-ranges': 'bytes',
            etag: 'W/\'b7-15d4bf1966c\'',
            'content-length': '183',
            'content-type': 'text/yaml; charset=UTF-8'
          },
          config: {
            transformRequest: {},
            transformResponse: {},
            timeout: 0,
            xsrfCookieName: 'XSRF-TOKEN',
            xsrfHeaderName: 'X-XSRF-TOKEN',
            maxContentLength: -1,
            headers: {
              Accept: 'application/json, text/plain, */*'
            },
            method: 'get',
            url: '/data/frames.yaml'
          },
          request: {}
        }
      }
    },
    out: {
      carousel: [{
        backgroundImage: '/startbootstrap/img/backgrounds/bg-1.jpg',
        frameName: 'Digital_0b4a',
        imageId: 1001
      }, {
        backgroundImage: '/startbootstrap/img/backgrounds/bg-1.jpg',
        frameName: 'Standard_Photo_Paper_ae2e',
        imageId: 1001
      }, {
        backgroundImage: '/startbootstrap/img/backgrounds/bg-1.jpg',
        frameName: 'Premium_Photo_Paper_386d',
        imageId: 1001
      }],
      frames: {
        Digital_0b4a: {
          name: 'Digital',
          formats: [
            {
              name: 'Web only (1600 x 1000px)',
              description: '\'Some words to the format\'\n',
              price: 25
            }
          ],
          maxNumber: 1,
          canvas: 'golden_frame',
          frameId: 'Digital_0b4a'
        }
      },
      images: {
        1001: {
          imageId: 1001,
          largeImage: '/startbootstrap/img/gallery/bird.jpg',
          mediumImage: '/startbootstrap/img/gallery/bird.jpg',
          smallImage: '/startbootstrap/img/gallery/bird.jpg',
          alt: 'Alternative text',
          name: 'bird',
          description: 'bird, bird, bird, bird, bird',
          frames: [
            'Digital',
            'Standard Photo Paper',
            'Premium Photo Paper'
          ],
          backgroundImage: '/startbootstrap/img/backgrounds/bg-1.jpg'
        }
      }
    }
  }],


  urlize: [{
    in: 'digital',
    out: 'digital_e65e'
  }, {
    in: 'Ädig italä',
    out: '_dig_ital__da44'
  }, {
    in: 'Photo Paper!',
    out: 'Photo_Paper__669b'
  }],


  fetchImages: [{
    in: 'digital',
    out: 'digital_e65e'
  }],

  fetchFrames: [{
    in: 'digital',
    out: 'digital_e65e'
  }]
};

describe('Image Shop Test Suite, ', () => {

  describe('parsing and correcting Yaml, ', () => {
    it('parses YAML', () => {
      testData.parseYaml.map(
        d => expect(parseYaml(d.in)).to.be.eql(d.out),
      );
    });
    it('corrects YAML', () => {
      expect(correctYaml('- name: "Digital"\n  formats:')).to.be.equal('- name: "Digital"\n  formats:');
    });
  });

  describe('converting data in store, ', () => {
    it('imageData -> images', () => {
      testData.imageData.map(
        d => expect(convertImageData(d.in)).to.be.eql(d.out),
      );
    });

    it('frameData -> frames', () => {
      testData.frameData.map(
        d => expect(convertFrameData(d.in)).to.be.eql(d.out),
      );
    });

    it('fillCarousel -> carousel', () => {
      testData.fillCarousel.map(
        d => expect(fillCarousel(d.in)).to.be.eql(d.out),
      );
    });
  });

  describe('utility functions, ', () => {
    it('urlize', () => {
      testData.urlize.map(
        d => expect(urlize(d.in)).to.be.eql(d.out),
      );
    });
  });

  describe('reducers, ', () => {
    it('FETCH_IMAGES', () => {
      testData.reducerFetchImages.map(
        d => expect(reducers(d.in.state, d.in.action)).to.be.eql(d.out),
      );
    });

    it('FETCH_FRAMES', () => {
      testData.reducerFetchFrames.map(
        d => expect(reducers(d.in.state, d.in.action)).to.be.eql(d.out),
      );
    });
  });

  describe('components: ', () => {
    describe('PortfolioImage, ', () => {
      it('spinner div available', () => {
        const wrapper = mount(<PortfolioImage />);
        expect(wrapper.contains(<div className="spinner" />)).to.equal(true);
      });

      it('find 8 strings', () => {
        const props = {
          images: {
            1001: {
              imageId: 1001,
              largeImage: '/startbootstrap/img/gallery/bird.jpg',
              mediumImage: '/startbootstrap/img/gallery/bird.jpg',
              smallImage: '/startbootstrap/img/gallery/bird.jpg',
              alt: 'Alternative text',
              name: 'bird',
              description: 'bird, bird, bird, bird, bird',
              frames: [
                'Digital'
              ],
              backgroundImage: '/startbootstrap/img/backgrounds/bg-1.jpg'
            }
          },
          element: {
            imageId: 1001,
            captionTitle: 'bird',
            captionCategory: '...',
            filters: [
              'Nature_2b2f',
              'Animals',
              'Time_e530',
              'Spring'
            ]
          }
        };
        const wrapper = mount(<PortfolioImage {...props} />);
        expect(wrapper.find('.text-title')).to.have.length(1);
        expect(wrapper.findWhere(n => typeof n.type() === 'string')).to.have.length(8);
      });
    });

    describe('PortfolioGrid, ', () => {
      it('spinner div available', () => {
        const wrapper = shallow(<PortfolioGrid />);
        expect(wrapper.contains(<div className="spinner" />)).to.equal(true);
      });

      it('checking for portfolioList', () => {
        const props = {
          portfolio: {
            elements: [{
              imageId: 1001,
              captionTitle: 'bird',
              captionCategory: '...',
              filters: [
                'Nature_2b2f',
                'Animals',
                'Time_e530',
                'Spring'
              ]
            }]
          }
        };
        const wrapper = shallow(<PortfolioGrid {...props} />);
        expect(wrapper.contains(<div className="spinner" />)).to.equal(false);
      });
    });
  });
});

