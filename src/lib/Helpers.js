import config from './config.js';

export default class Helpers{
	static createCircle(){

		let newCircle = document.createElement('div');
		newCircle.classList.add('circle');

		return newCircle;
	}
	static createSmallThumbnail( x, y ){
		let thumbnail = document.createElement('div');

		thumbnail.classList.add('small-thumb');
		thumbnail.setAttribute("style", "left:" + x + "px; top:" + y +"px;");
		return thumbnail;
	}
}