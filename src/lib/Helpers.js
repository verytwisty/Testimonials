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

		thumbnail.appendChild( Helpers.createImg() );
		thumbnail.appendChild( Helpers.createToolTip() );

		return thumbnail;
	}
	static createImg(){
		let portrait = document.createElement('img');

		portrait.setAttribute('src', '../../../uploads/2018/05/portrait-1-150x150.jpg');
		return portrait;
	}
	static createToolTip(){
		let toolTip = document.createElement('div'),
			name = document.createTextNode('John Smith');

		toolTip.appendChild(name);
		return toolTip;
	}
}