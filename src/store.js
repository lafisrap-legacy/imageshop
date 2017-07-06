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

const mockups = ["galaxy_s3","galaxy_s5","galaxy_tab4","galaxy_tab4_small","imac","ipad","ipad_air","ipad_air_2","ipad_pro","iphone5","iphone_6","iphone_6_plus","iphone_se","lumia920","lumia_930","macbook","macbook_2015","nexus_6","nexus7","samsung_tv","surface"];
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
		1018: {
				image: "/startbootstrap/img/gallery/goldenclouds.jpg",
				imageSmall: "/startbootstrap/img/gallery/goldenclouds.jpg",
				alt: "Alternative text",
				name: "goldenclouds",
				description: "goldenclouds,goldenclouds,goldenclouds,goldenclouds,goldenclouds"
			}, 
		1019: {
				image: "/startbootstrap/img/gallery/goldenflight.jpg",
				imageSmall: "/startbootstrap/img/gallery/goldenflight.jpg",
				alt: "Alternative text",
				name: "goldenflight",
				description: "goldenflight,goldenflight,goldenflight,goldenflight,goldenflight"
			}, 
		1020: {
				image: "/startbootstrap/img/gallery/blossom.jpg",
				imageSmall: "/startbootstrap/img/gallery/blossom.jpg",
				alt: "Alternative text",
				name: "blossom",
				description: "blossom,blossom,blossom,blossom,blossom"
			}, 
		1021: {
				image: "/startbootstrap/img/gallery/bud.jpg",
				imageSmall: "/startbootstrap/img/gallery/bud.jpg",
				alt: "Alternative text",
				name: "bud",
				description: "bud,bud,bud,bud,bud"
			}, 
		1022: {
				image: "/startbootstrap/img/gallery/fragile.jpg",
				imageSmall: "/startbootstrap/img/gallery/fragile.jpg",
				alt: "Alternative text",
				name: "fragile",
				description: "fragile,fragile,fragile,fragile,fragile"
			}, 
		1023: {
				image: "/startbootstrap/img/gallery/stairs.jpg",
				imageSmall: "/startbootstrap/img/gallery/stairs.jpg",
				alt: "Alternative text",
				name: "stairs",
				description: "stairs,stairs,stairs,stairs,stairs"
			}, 
		1024: {
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
		  "imageId": 1018,
		  "captionTitle": "Golden Clouds",
		  "captionCategory": "...",
		  "filters": [
			"Nature",
			"Sky",
			"Sunlight"
		  ]
		},
		{
		  "imageId": 1019,
		  "captionTitle": "Flight",
		  "captionCategory": "...",
		  "filters": [
			"Nature",
			"Sky",
			"Sunlight"
		  ]
		},
		{
		  "imageId": 1020,
		  "captionTitle": "Blossom",
		  "captionCategory": "...",
		  "filters": [
			"Nature",
			"Spring"
		  ]
		},
		{
		  "imageId": 1021,
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
		  "imageId": 1022,
		  "captionTitle": "Fragile",
		  "captionCategory": "...",
		  "filters": [
			"Nature",
			"Evening"
		  ]
		},
		{
		  "imageId": 1023,
		  "captionTitle": "Stairs",
		  "captionCategory": "...",
		  "filters": [
			"Inhouse"
		  ]
		},
		{
		  "imageId": 1024,
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
		canvas: "galaxy_s3",
		imageId: 1001
	}, {
		canvas: "galaxy_s5",
		imageId: 1002
	}, {
		canvas: "galaxy_tab4",
		imageId: 1003
	}, {
		canvas: "galaxy_tab4_small",
		imageId: 1004
	}, {
		canvas: "imac",
		imageId: 1005
	}, {
		canvas: "ipad",
		imageId: 1006
	}, {
		canvas: "ipad_air",
		imageId: 1007
	}, {
		canvas: "ipad_air_2",
		imageId: 1008
	}, {
		canvas: "ipad_pro",
		imageId: 1009
	}, {
		canvas: "iphone5",
		imageId: 1010
	}, {
		canvas: "iphone_6",
		imageId: 1011
	}, {
		canvas: "iphone_6_plus",
		imageId: 1012
	}, {
		canvas: "iphone_se",
		imageId: 1013
	}, {
		canvas: "lumia920",
		imageId: 1014
	}, {
		canvas: "lumia_930",
		imageId: 1015
	}, {
		canvas: "macbook",
		imageId: 1016
	}, {
		canvas: "macbook_2015",
		imageId: 1017
	}, {
		canvas: "nexus_6",
		imageId: 1018
	}, {
		canvas: "nexus7",
		imageId: 1019
	}, {
		canvas: "samsung_tv",
		imageId: 1020
	}, {
		canvas: "surface",
		imageId: 1021
	} ],

	canvases: {
		"galaxy_s3": 	{
			name: "galaxy_s3",
			size: "30 x 20cm",
			color: "black"
		},
		"galaxy_s5": 	{
			name: "galaxy_s5",
			size: "30 x 20cm",
			color: "black"
		},
		"galaxy_tab4": 	{
			name: "galaxy_tab4",
			size: "30 x 20cm",
			color: "black"
		},
		"galaxy_tab4_small": 	{
			name: "galaxy_tab4_small",
			size: "30 x 20cm",
			color: "black"
		},
		"imac": 	{
			name: "imac",
			size: "30 x 20cm",
			color: "black"
		},
		"ipad": 	{
			name: "ipad",
			size: "30 x 20cm",
			color: "black"
		},
		"ipad_air": 	{
			name: "ipad_air",
			size: "30 x 20cm",
			color: "black"
		},
		"ipad_air_2": 	{
			name: "ipad_air_2",
			size: "30 x 20cm",
			color: "black"
		},
		"ipad_pro": 	{
			name: "ipad_pro",
			size: "30 x 20cm",
			color: "black"
		},
		"iphone5": 	{
			name: "iphone5",
			size: "30 x 20cm",
			color: "black"
		},
		"iphone_6": 	{
			name: "iphone_6",
			size: "30 x 20cm",
			color: "black"
		},
		"iphone_6_plus": 	{
			name: "iphone_6_plus",
			size: "30 x 20cm",
			color: "black"
		},
		"iphone_se": 	{
			name: "iphone_se",
			size: "30 x 20cm",
			color: "black"
		},
		"lumia920": 	{
			name: "lumia920",
			size: "30 x 20cm",
			color: "black"
		},
		"lumia_930": 	{
			name: "lumia_930",
			size: "30 x 20cm",
			color: "black"
		},
		"macbook": 	{
			name: "macbook",
			size: "30 x 20cm",
			color: "black"
		},
		"macbook_2015": 	{
			name: "macbook_2015",
			size: "30 x 20cm",
			color: "black"
		},
		"nexus_6": 	{
			name: "nexus_6",
			size: "30 x 20cm",
			color: "black"
		},
		"nexus7": 	{
			name: "nexus7",
			size: "30 x 20cm",
			color: "black"
		},
		"samsung_tv": 	{
			name: "samsung_tv",
			size: "30 x 20cm",
			color: "black"
		},
		"surface": 	{
			name: "surface",
			size: "30 x 20cm",
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
