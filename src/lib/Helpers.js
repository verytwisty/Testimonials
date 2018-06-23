import config from './config.js';
import Router from './Router.js';


export default class Helpers{
	static createTestimonialsTitle( title ){
		let titleMarkup = document.createElement('h2'),
			titleTxt = document.createTextNode(title);

		titleMarkup.append(titleTxt);
		return titleMarkup;
	}
	static createNewBlurb( description, className ){
		let blurbMarukp = document.createElement('div');

		blurbMarukp.innerHTML = description;
		blurbMarukp.classList.add( className );

		return blurbMarukp;
	}
	static createCircle( className ){

		let newCircle = document.createElement('div');
		newCircle.classList.add( className );

		return newCircle;
	}
	static createSmallThumbnail( x, y, person ){
		let thumbnail = document.createElement('div'),
			thumbImage = person._embedded['wp:featuredmedia'][0].media_details.sizes.thumbnail.source_url;

		thumbnail.classList.add('small-thumb');
		thumbnail.setAttribute("style", "left:" + x + "px; top:" + y +"px;");

		thumbnail.append( Helpers.createImg( thumbImage ) );
		thumbnail.append( Helpers.createPersonName( person.title.rendered, 'div', 'tool-tip' ) );

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

		nameMarkup.append(personName);
		nameMarkup.classList.add(className);

		return nameMarkup;
	}
	static createPersonTitle( title ){
		let titleMarkup = document.createElement('h3'),
			titleTxt = document.createTextNode(title);

		titleMarkup.append(titleTxt);
		return titleMarkup;
	}
	static createBackBtn(){
		let btn = document.createElement('a'),
			btnTxt = document.createTextNode('More People');

		btn.append( btnTxt );
		btn.classList.add('button');
		btn.setAttribute('href', '#');

		return btn;
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
	static addPeopleToCircles( circle, array, responsive ){

		// Found from here http://jsfiddle.net/jE26S/12/

		var items = array.length,
			circleWidth = circle.offsetWidth / 2;

		for(let i = 0; i < items; i++) {

			let personData = array[i];

		    var x = circleWidth - 25 + circleWidth * Math.cos(2 * Math.PI * i / items);
		    var y = circleWidth - 25 + circleWidth * Math.sin(2 * Math.PI * i / items);

		    if( false === responsive ){

			    let personThumb = Helpers.createSmallThumbnail( x, y, personData );

			    circle.append(personThumb );

			    personThumb.addEventListener("mouseover", Helpers.showPersonName, false);
				personThumb.addEventListener("mouseout", Helpers.hidePersonName, false);
				personThumb.addEventListener("click", Router.makeTestimonialPage.bind(personData, personThumb), false);
			}
			if( true === responsive ){

				personData.setAttribute("style", "left:" + x + "px; top:" + y +"px;");
			}

		}
	}
	static shuffleArray(array) {

		// randomise the array
		// function found here https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array

	    for (let i = array.length - 1; i > 0; i--) {
	        const j = Math.floor(Math.random() * (i + 1));
	        [array[i], array[j]] = [array[j], array[i]];
	    }

	    return array;
	}
}