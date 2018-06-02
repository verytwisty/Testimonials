import config from '../../lib/config';
import Helpers from '../../lib/Helpers';
import Data from '../../lib/Data';

export default class Circles{
	static render(){

		let circleBox = config.circleBox,
			newCircle = Helpers.createCircle(),
			data = Data.testimonials();

		circleBox.appendChild( newCircle );

		// console.log(data);

		// Found from here http://jsfiddle.net/jE26S/12/

		var items = data.length;
		for(let i = 0; i < items; i++) {

			let person = data[i];

		    var x = 200 - 25 + 200 * Math.cos(2 * Math.PI * i / items);
		    var y = 200 - 25 + 200 * Math.sin(2 * Math.PI * i / items);
		    newCircle.appendChild( Helpers.createSmallThumbnail( x, y, person.image, person.name ) );

		}

	}
}