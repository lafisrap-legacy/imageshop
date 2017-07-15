/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from "redux-promise";
import { FETCH_IMAGES, FETCH_FRAMES, FILL_CAROUSEL } from './actions';
import { parseYaml } from './data';
import { union, isEmpty } from 'lodash';
import { urlize } from './utils';

// Canvases: "galaxy_tab4", "imac", "ipad_air_2", "iphone_6_plus", "macbook_2015", "samsung_tv" 

const IMAGE_PATH = "/startbootstrap/img/gallery/";
const BACKGROUND_PATH = "/startbootstrap/img/backgrounds/";

// Centralized application state
// For more information visit http://redux.js.org/
const initialState = {
	//////////////////////////////////////////////////////
	// Images, that are offered
	images: {},

	//////////////////////////////////////////////////////
	// Structure, in that images ate shown 
	portfolio: {},

	//////////////////////////////////////////////////////
	// Cancases and Info of the current image 
	carousel: [],

	//////////////////////////////////////////////////////
	// Frames for the images
	frames: [],

	//////////////////////////////////////////////////////
	// The shoping cart
	cart: { items: [] },
};

/////////////////////////////////////////////////////////////////////////////////////
// convertImageData: Image data from yaml file has to be converted to more database
// like structure.
//
function convertImageData({ title, subtitle, all, images }) {
	var imageData = images,
		images = {},
		portfolio = { title, subtitle, all, filters: [], elements: [] },
		carousel = [],
		currentCarouselImage = null;

	imageData.map( image => {
		images[image.id] = {
			imageId: 	 	 image.id,
			largeImage:  	 IMAGE_PATH + image.largeImage,
			mediumImage: 	 IMAGE_PATH + image.mediumImage,
			smallImage:  	 IMAGE_PATH + image.smallImage,
			alt: 		 	 image.altText,
			name: 		 	 image.title,
			description: 	 image.description,
			frames:   	 	 image.frames,
			backgroundImage: BACKGROUND_PATH + image.backgroundImage
		};

		image.filters.map( filter => {
			let f = portfolio.filters.find( f => f.name === filter.name );
			if( !f ) {
				portfolio.filters.push({
					id: urlize( filter.name ),
					name: filter.name,
					topics: [urlize( filter.name )].concat( filter.topics )
				});
			} else {
				f.topics = union( f.topics, filter.topics );
			}
		});

		portfolio.elements.push({
			imageId: image.id,
			captionTitle: image.title,
			captionCategory: "...",
			filters: [].concat( ...image.filters.map( filter => [urlize( filter.name )].concat( filter.topics ) ) )
		});
	});

	return { images, portfolio };
}

/////////////////////////////////////////////////////////////////////////////////////
// convertFrameData: Frame data from yaml file has to be converted to more database
// like structure.
//
function convertFrameData( frameData ) {

	let frames = {};

	frameData.map( frame => {
		frame.frameId = urlize( frame.name );
		frames[ urlize( frame.name ) ] = frame;
	});

	return frames;
}

/////////////////////////////////////////////////////////////////////////////////////
// fillCarousel: Filling the carousel with one image on all its frames
//
function fillCarousel( image ) {

	return image.frames.map( name => { 
		let frameName = urlize( name ),
			{ imageId, backgroundImage } = image;

		return { frameName, imageId, backgroundImage } 
	});
}

////////////////////////////////////////////////////////////////////////////////////////
// Reducers: Here is the central meeting point for all reducers
//
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
const store = createStoreWithMiddleware((state = initialState, action) => {
  switch (action.type) {

	case FETCH_IMAGES:

		let imageData = parseYaml( action.payload.data ),
			{ images, portfolio } = convertImageData( imageData );

		// If frames from frames.yaml are already loaded, then complete carousel
		if( !isEmpty(state.frames) ) {
			let firstImage = images[(Object.keys(state.images)[0])],
				carousel = fillCarousel( firstImage );
	console.log(JSON.stringify("CAROUSEL",carousel));
	console.log(JSON.stringify("FIRST",firstImage));

			var newState = { ...state, images, portfolio, carousel };
		} else {
			var newState = { ...state, images, portfolio };
		}

		return newState;

	case FETCH_FRAMES:

		let framesData= parseYaml( action.payload.data ),
			frames = convertFrameData( framesData );

		// If images from images.yaml are already loaded, then complete carousel
		if( !isEmpty(state.images) ) {
			let firstImage = state.images[(Object.keys(state.images)[0])],
				carousel = fillCarousel( firstImage );
	console.log(JSON.stringify(carousel));
	console.log(JSON.stringify(firstImage));


			var newState = { ...state, frames , carousel };
		} else {
			var newState = { ...state, frames };
		}

		return newState;

	case FILL_CAROUSEL:
		return { ...state };

	default:
	  return state;
  }
});

export default store;
