import config from '../../lib/config';
import Helpers from '../../lib/Helpers';
import Data from '../../lib/Data';
import Testimonial from '../Testimonial/index.js';

export default class Circles{
	static render(){

		let circleBox = config.circleBox,
			newCircle = Helpers.createCircle(),
			data = Data.testimonials();

		circleBox.appendChild( newCircle );

		// Found from here http://jsfiddle.net/jE26S/12/

		var items = data.length;
		for(let i = 0; i < items; i++) {

			let personData = data[i];

		    var x = 200 - 25 + 200 * Math.cos(2 * Math.PI * i / items);
		    var y = 200 - 25 + 200 * Math.sin(2 * Math.PI * i / items);

		    let personThumb = Helpers.createSmallThumbnail( x, y, personData );

		    newCircle.appendChild(personThumb );

		    personThumb.addEventListener("mouseover", Helpers.showPersonName, false);
			personThumb.addEventListener("mouseout", Helpers.hidePersonName, false);
			personThumb.addEventListener("click", Testimonial.render.bind(personData, personThumb), false);

		    // console.log(personThumb);

		}

	}
}