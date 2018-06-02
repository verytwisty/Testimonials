import config from './config.js';

export default class Helpers{
	static createCircle(){

		let newCircle = document.createElement('div');
		newCircle.classList.add('circle');

		return newCircle;
	}
	static createSmallThumbnail( x, y, image, name ){
		let thumbnail = document.createElement('div');

		thumbnail.classList.add('small-thumb');
		thumbnail.setAttribute("style", "left:" + x + "px; top:" + y +"px;");

		thumbnail.appendChild( Helpers.createImg( image ) );
		thumbnail.appendChild( Helpers.createToolTip( name ) );

		return thumbnail;
	}
	static createImg( image ){
		let portrait = document.createElement('img');

		portrait.setAttribute('src', image );
		return portrait;
	}
	static createToolTip( name ){
		let toolTip = document.createElement('div'),
			personName = document.createTextNode( name );

		toolTip.appendChild(personName);
		return toolTip;
	}
}