import config from './config.js';
import Router from './Router.js';


export default class Helpers{
	static createTestimonialsTitle( title ){
		let titleMarkup = document.createElement('h2'),
			titleTxt = document.createTextNode(title);

		titleMarkup.appendChild(titleTxt);
		return titleMarkup;
	}
	static createNewBlurb( description, className ){
		let blurbMarukp = document.createElement('div'),
			blurbTxt = document.createTextNode(description);

		blurbMarukp.appendChild(blurbTxt);
		blurbMarukp.classList.add( className );

		return blurbMarukp;
	}
	static createCircle(){

		let newCircle = document.createElement('div');
		newCircle.classList.add('circle');

		return newCircle;
	}
	static createSmallThumbnail( x, y, person ){
		let thumbnail = document.createElement('div');

		thumbnail.classList.add('small-thumb');
		thumbnail.setAttribute("style", "left:" + x + "px; top:" + y +"px;");

		thumbnail.appendChild( Helpers.createImg( person.image ) );
		thumbnail.appendChild( Helpers.createPersonName( person.name, 'div', 'tool-tip' ) );

		return thumbnail;
	}
	static createImg( image ){
		let portrait = document.createElement('img');

		portrait.setAttribute('src', image );
		return portrait;
	}
	static createPersonName( name, markup, className = 'name' ){
		let nameMarkup = document.createElement(markup),
			personName = document.createTextNode( name );

		nameMarkup.appendChild(personName);
		nameMarkup.classList.add(className);

		return nameMarkup;
	}
	static createPersonTitle( title ){
		let titleMarkup = document.createElement('h3'),
			titleTxt = document.createTextNode(title);

		titleMarkup.appendChild(titleTxt);
		return titleMarkup;
	}
	static createBackBtn(){
		let btn = document.createElement('a'),
			btnTxt = document.createTextNode('More People');

		btn.appendChild( btnTxt );
		btn.classList.add('button');
		btn.setAttribute('href', '#');

		return btn
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
			circle.removeEventListener("click", Router.makeTestimonialPage.bind(), false);
		}
	}
	static clearPage(){
		config.circleBox.innerHTML = '';
		config.textBox.innerHTML = '';
	}
}