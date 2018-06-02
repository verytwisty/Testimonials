import config from '../../lib/config';
import Helpers from '../../lib/Helpers';
import Data from '../../lib/Data';

export default class Testimonial{
	static render(thumbnail, event){

		let circleBox = config.circleBox;

		// remove circle data

		// remove all event listeners.
		Helpers.resetEventListenersCircles();

		// remove the circles
		Helpers.removeCircle();

		thumbnail.classList.remove( 'small-thumb' )
		thumbnail.classList.add('large-thumb');
		thumbnail.setAttribute( 'style', "left: 0; top: 0;" );

		circleBox.append(thumbnail);

		console.log( this );
		console.log(event);
		console.log(thumbnail);

	}
}