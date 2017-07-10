import axios from "axios";

// Fetch images from yaml file
export const FETCH_IMAGES = "FETCH_IMAGES";
export function fetchImages() {
	return {
		type: FETCH_IMAGES,
		payload: axios.get(`/data/images.yaml`)
	}
}

// Fetch frames from yaml file
export const FETCH_FRAMES = "FETCH_FRAMES";
export function fetchFrames() {
	return {
		type: FETCH_FRAMES,
		payload: axios.get(`/data/frames.yaml`)
	}
}

// Fetch frames from yaml file
export const FILL_CAROUSEL = "FILL_CAROUSEL";
export function fillCarousel( imageId ) {
	return {
		type: FILL_CAROUSEL,
		payload: imageId
	}
}