import config from '../../lib/config';
import Helpers from '../../lib/Helpers';

export default class Circles{
	static render(){

		let circleBox = config.circleBox,
			newCircle = Helpers.createCircle();

		circleBox.appendChild( newCircle );

		// Found from here http://jsfiddle.net/jE26S/12/

		var items = 8;
		for(var i = 0; i < items; i++) {

		    var x = 200 - 25 + 200 * Math.cos(2 * Math.PI * i / items);
		    var y = 200 - 25 + 200 * Math.sin(2 * Math.PI * i / items);
		    newCircle.appendChild( Helpers.createSmallThumbnail( x, y ) );

		}

	}
}