import config from './config.js';
import Testimonial from '../components/Testimonial/index.js';


export default class Helpers{
	static createCircle(){

		let newCircle = document.createElement('div');
		newCircle.classList.add('circle');

		return newCircle;
	}
	static removeCircle(){
		let circle = document.querySelector('.circle');

		circle.remove();
	}
	static createSmallThumbnail( x, y, person ){
		let thumbnail = document.createElement('div');

		thumbnail.classList.add('small-thumb');
		thumbnail.setAttribute("style", "left:" + x + "px; top:" + y +"px;");

		thumbnail.appendChild( Helpers.createImg( person.image ) );
		thumbnail.appendChild( Helpers.createToolTip( person.name ) );

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
	static showPersonName(){
		var image = this.children[0];
		var name = this.children[1];

		name.classList.add('visible');
		this.classList.add('border');
	}
	static hidePersonName(){
		var image = this.children[0];
		var name = this.children[1];

		name.classList.remove('visible');
		this.classList.remove('border');
	}
	static resetEventListenersCircles(){
		let allCircles = document.querySelectorAll('.small-thumb'),
			max = allCircles.length;

		for(let i = 0; i < max; i++) {

			let circle = allCircles[i];

			circle.removeEventListener("mouseover", Helpers.showPersonName, false);
			circle.removeEventListener("mouseout", Helpers.hidePersonName, false);
			circle.removeEventListener("click", Testimonial.render, false);
		}
	}
}