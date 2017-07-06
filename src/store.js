/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import { createStore } from 'redux';

// Centralized application state
// For more information visit http://redux.js.org/
const initialState = {

	cart: {
		items: [{
			imageId: 1008,
		}]
	},

	images: {
		1001: {
				image: "/startbootstrap/img/gallery/bird.jpg",
				imageSmall: "/startbootstrap/img/gallery/bird.jpg",
				alt: "Alternative text",
				name: "bird",
				description: "bird,bird,bird,bird,bird"
			}, 
		1002: {
				image: "/startbootstrap/img/gallery/drops.jpg",
				imageSmall: "/startbootstrap/img/gallery/drops.jpg",
				alt: "Alternative text",
				name: "drops",
				description: "drops,drops,drops,drops,drops"
			}, 
		1003: {
				image: "/startbootstrap/img/gallery/drygrass.jpg",
				imageSmall: "/startbootstrap/img/gallery/drygrass.jpg",
				alt: "Alternative text",
				name: "drygrass",
				description: "drygrass,drygrass,drygrass,drygrass,drygrass"
			}, 
		1004: {
				image: "/startbootstrap/img/gallery/flies.jpg",
				imageSmall: "/startbootstrap/img/gallery/flies.jpg",
				alt: "Alternative text",
				name: "flies",
				description: "flies,flies,flies,flies,flies"
			}, 
		1005: {
				image: "/startbootstrap/img/gallery/forest.jpg",
				imageSmall: "/startbootstrap/img/gallery/forest.jpg",
				alt: "Alternative text",
				name: "forest",
				description: "forest,forest,forest,forest,forest"
			}, 
		1006: {
				image: "/startbootstrap/img/gallery/globe.jpg",
				imageSmall: "/startbootstrap/img/gallery/globe.jpg",
				alt: "Alternative text",
				name: "globe",
				description: "globe,globe,globe,globe,globe"
			}, 
		1007: {
				image: "/startbootstrap/img/gallery/ice.jpg",
				imageSmall: "/startbootstrap/img/gallery/ice.jpg",
				alt: "Alternative text",
				name: "ice",
				description: "ice,ice,ice,ice,ice"
			}, 
		1008: {
				image: "/startbootstrap/img/gallery/morning.jpg",
				imageSmall: "/startbootstrap/img/gallery/morning.jpg",
				alt: "Alternative text",
				name: "morning",
				description: "morning,morning,morning,morning,morning"
			}, 
		1009: {
				image: "/startbootstrap/img/gallery/pastel.jpg",
				imageSmall: "/startbootstrap/img/gallery/pastel.jpg",
				alt: "Alternative text",
				name: "pastel",
				description: "pastel,pastel,pastel,pastel,pastel"
			}, 
		1010: {
				image: "/startbootstrap/img/gallery/pink.jpg",
				imageSmall: "/startbootstrap/img/gallery/pink.jpg",
				alt: "Alternative text",
				name: "pink",
				description: "pink,pink,pink,pink,pink"
			}, 
		1011: {
				image: "/startbootstrap/img/gallery/rain.jpg",
				imageSmall: "/startbootstrap/img/gallery/rain.jpg",
				alt: "Alternative text",
				name: "rain",
				description: "rain,rain,rain,rain,rain"
			}, 
		1012: {
				image: "/startbootstrap/img/gallery/rose.jpg",
				imageSmall: "/startbootstrap/img/gallery/rose.jpg",
				alt: "Alternative text",
				name: "rose",
				description: "rose,rose,rose,rose,rose"
			}, 
		1013: {
				image: "/startbootstrap/img/gallery/sea.jpg",
				imageSmall: "/startbootstrap/img/gallery/sea.jpg",
				alt: "Alternative text",
				name: "sea",
				description: "sea,sea,sea,sea,sea"
			}, 
		1014: {
				image: "/startbootstrap/img/gallery/sky.jpg",
				imageSmall: "/startbootstrap/img/gallery/sky.jpg",
				alt: "Alternative text",
				name: "sky",
				description: "sky,sky,sky,sky,sky"
			}, 
		1015: {
				image: "/startbootstrap/img/gallery/tree.jpg",
				imageSmall: "/startbootstrap/img/gallery/tree.jpg",
				alt: "Alternative text",
				name: "tree",
				description: "tree,tree,tree,tree,tree"
			}, 
		1016: {
				image: "/startbootstrap/img/gallery/wave.jpg",
				imageSmall: "/startbootstrap/img/gallery/wave.jpg",
				alt: "Alternative text",
				name: "wave",
				description: "wave,wave,wave,wave,wave"
			}, 
		1017: {
				image: "/startbootstrap/img/gallery/ice.jpg",
				imageSmall: "/startbootstrap/img/gallery/ice.jpg",
				alt: "Alternative text",
				name: "ice",
				description: "ice,ice,ice,ice,ice"
			}, 
		1022: {
				image: "/startbootstrap/img/gallery/goldenclouds.jpg",
				imageSmall: "/startbootstrap/img/gallery/goldenclouds.jpg",
				alt: "Alternative text",
				name: "goldenclouds",
				description: "goldenclouds,goldenclouds,goldenclouds,goldenclouds,goldenclouds"
			}, 
		1023: {
				image: "/startbootstrap/img/gallery/goldenflight.jpg",
				imageSmall: "/startbootstrap/img/gallery/goldenflight.jpg",
				alt: "Alternative text",
				name: "goldenflight",
				description: "goldenflight,goldenflight,goldenflight,goldenflight,goldenflight"
			}, 
		1024: {
				image: "/startbootstrap/img/gallery/blossom.jpg",
				imageSmall: "/startbootstrap/img/gallery/blossom.jpg",
				alt: "Alternative text",
				name: "blossom",
				description: "blossom,blossom,blossom,blossom,blossom"
			}, 
		1025: {
				image: "/startbootstrap/img/gallery/bud.jpg",
				imageSmall: "/startbootstrap/img/gallery/bud.jpg",
				alt: "Alternative text",
				name: "bud",
				description: "bud,bud,bud,bud,bud"
			}, 
		1026: {
				image: "/startbootstrap/img/gallery/fragile.jpg",
				imageSmall: "/startbootstrap/img/gallery/fragile.jpg",
				alt: "Alternative text",
				name: "fragile",
				description: "fragile,fragile,fragile,fragile,fragile"
			}, 
		1027: {
				image: "/startbootstrap/img/gallery/stairs.jpg",
				imageSmall: "/startbootstrap/img/gallery/stairs.jpg",
				alt: "Alternative text",
				name: "stairs",
				description: "stairs,stairs,stairs,stairs,stairs"
			}, 
		1028: {
			image: "/startbootstrap/img/gallery/greece.jpg",
			imageSmall: "/startbootstrap/img/gallery/greece.jpg",
				alt: "Alternative text",
				name: "greece",
				description: "greece,greece,greece,greece,greece"
		}
	},

	portfolio: { 
	  "title": "Image Gallery",
	  "subtitle": "Basic: Choose up to 5 photos, Plus: Choose up to 10, Premium: Any number",
	  "filters": [
		{
		  "id": "nature",
		  "name": "Nature",
		  "topics": [
			"Nature",
			"Flowers",
			"Animals",
			"Trees",
			"Water",
			"Sky",
			"Drops",
			"Sunlight"
		  ]
		},
		{
		  "id": "time",
		  "name": "Time",
		  "topics": [
			"Time",
			"Spring",
			"Summer",
			"Autumn",
			"Winter",
			"Morning",
			"Evening"
		  ]
		},
		{
		  "id": "in_the_house",
		  "name": "In the House",
		  "topics": [
			"Inhouse",
			"Objects"
		  ]
		}
	  ],
	  "all": "Alle",
	  "elements": [
		{
		  "imageId": 1001,
		  "captionTitle": "Bird",
		  "captionCategory": "...",
		  "filters": [
			"Nature",
			"Animals",
			"Spring"
		  ]
		},
		{
		  "imageId": 1002,
		  "captionTitle": "Drops",
		  "captionCategory": "...",
		  "filters": [
			"Nature",
			"Autumn",
			"Water",
			"Drops"
		  ]
		},
		{
		  "imageId": 1003,
		  "captionTitle": "Dry Grass",
		  "captionCategory": "...",
		  "filters": [
			"Nature",
			"Autumn",
			"Flowers"
		  ]
		},
		{
		  "imageId": 1004,
		  "captionTitle": "Flies",
		  "captionCategory": "...",
		  "filters": [
			"Nature",
			"Autumn",
			"Sunlight",
			"Evening",
			"Time"
		  ]
		},
		{
		  "imageId": 1005,
		  "captionTitle": "Forest",
		  "captionCategory": "...",
		  "filters": [
			"Nature",
			"Trees",
			"Sunlight",
			"Evening",
			"Time"
		  ]
		},
		{
		  "imageId": 1006,
		  "captionTitle": "Globe",
		  "captionCategory": "...",
		  "filters": [
			"Inhouse",
			"Objects"
		  ]
		},
		{
		  "imageId": 1007,
		  "captionTitle": "Ice",
		  "captionCategory": "...",
		  "filters": [
			"Nature",
			"Water",
			"Winter"
		  ]
		},
		{
		  "imageId": 1008,
		  "captionTitle": "Morning",
		  "captionCategory": "...",
		  "filters": [
			"Nature",
			"Trees",
			"Autumn",
			"Morning",
			"Time"
		  ]
		},
		{
		  "imageId": 1009,
		  "captionTitle": "Pastel",
		  "captionCategory": "...",
		  "filters": [
			"Nature",
			"Water"
		  ]
		},
		{
		  "imageId": 1010,
		  "captionTitle": "Pink",
		  "captionCategory": "...",
		  "filters": [
			"Nature",
			"Flowers",
			"Spring"
		  ]
		},
		{
		  "imageId": 1011,
		  "captionTitle": "Rain",
		  "captionCategory": "...",
		  "filters": [
			"Nature",
			"Water",
			"Drops"
		  ]
		},
		{
		  "imageId": 1012,
		  "captionTitle": "Rose",
		  "captionCategory": "...",
		  "filters": [
			"Nature",
			"Flowers",
			"Summer",
			"Time"
		  ]
		},
		{
		  "imageId": 1013,
		  "captionTitle": "Sea",
		  "captionCategory": "...",
		  "filters": [
			"Nature",
			"Water",
			"Sky"
		  ]
		},
		{
		  "imageId": 1014,
		  "captionTitle": "Sky",
		  "captionCategory": "...",
		  "filters": [
			"Nature",
			"Water",
			"Sky"
		  ]
		},
		{
		  "imageId": 1015,
		  "captionTitle": "Tree",
		  "captionCategory": "...",
		  "filters": [
			"Nature",
			"Trees",
			"Morning",
			"Time"
		  ]
		},
		{
		  "imageId": 1016,
		  "captionTitle": "Globe",
		  "captionCategory": "...",
		  "filters": [
			"Inhouse",
			"Objects"
		  ]
		},
		{
		  "imageId": 1017,
		  "captionTitle": "Ice",
		  "captionCategory": "...",
		  "filters": [
			"Nature",
			"Water",
			"Winter"
		  ]
		},
		{
		  "imageId": 1022,
		  "captionTitle": "Golden Clouds",
		  "captionCategory": "...",
		  "filters": [
			"Nature",
			"Sky",
			"Sunlight"
		  ]
		},
		{
		  "imageId": 1023,
		  "captionTitle": "Flight",
		  "captionCategory": "...",
		  "filters": [
			"Nature",
			"Sky",
			"Sunlight"
		  ]
		},
		{
		  "imageId": 1024,
		  "captionTitle": "Blossom",
		  "captionCategory": "...",
		  "filters": [
			"Nature",
			"Spring"
		  ]
		},
		{
		  "imageId": 1025,
		  "captionTitle": "Bud",
		  "captionCategory": "...",
		  "filters": [
			"Nature",
			"Trees",
			"Time",
			"Spring"
		  ]
		},
		{
		  "imageId": 1026,
		  "captionTitle": "Fragile",
		  "captionCategory": "...",
		  "filters": [
			"Nature",
			"Evening"
		  ]
		},
		{
		  "imageId": 1027,
		  "captionTitle": "Stairs",
		  "captionCategory": "...",
		  "filters": [
			"Inhouse"
		  ]
		},
		{
		  "imageId": 1028,
		  "captionTitle": "Greece",
		  "captionCategory": "...",
		  "filters": [
			"Nature",
			"Sunlight",
			"Sky",
			"Water"
		  ]
		}
	  ]
	},

	carousel: [ {
		canvas: "Canvas",
		imageId: 1001
	}, {
		canvas: "iPhone",
		imageId: 1002
	}, {
		canvas: "iPad",
		imageId: 1003
	}, {
		canvas: "macBookAir",
		imageId: 1004
	} ],

	canvases: {
		"macBookAir" : {
				name: "macbook",
				size: "30 x 20cm",
				orientation: "landscape",
				color: "black"
			},
		"Canvas" : {
				name: "Big Canvas",
				size: "30 x 20cm",
				orientation: "landscape",
				color: "black"
			},
		"iPhone" : {
				name: "iPhone 7",
				size: "30 x 20cm",
				orientation: "portrait",
				color: "black"
			},
		"iPad" : {
				name: "iPad 3",
				size: "30 x 20cm",
				orientation: "landscape",
				color: "black"
			},
	}

};

const store = createStore((state = initialState, action) => {
  // TODO: Add action handlers (aka "reducers")
  switch (action.type) {
	case 'COUNT':
	  return { ...state, count: (state.count) + 1 };
	default:
	  return state;
  }
});

export default store;
