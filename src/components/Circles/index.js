import config from '../../lib/config';
import Helpers from '../../lib/Helpers';
import Router from '../../lib/Router';
import Testimonial from '../Testimonial/index.js';

export default class Circles{
	static render( data ){

		let circleBox = config.circleBox,
			circleBoxWidth = circleBox.offsetWidth,
			outerCircle = Helpers.createCircle('outer-circle'),
			innerCircle = Helpers.createCircle('inner-circle'),
			displayInnerCircle = false,
			innerData;

		// shuffle the array to make it more interesting!
		data = Helpers.shuffleArray( data );

		// if data length is greater than 5 people add an inner circle

		if( data.length > 5 ){

			// get length of one third of the data
			let splitArray = Math.round( data.length / 3 );
			// set display circle to true
			displayInnerCircle = true;
			// get the data for the inner circle
			innerData = data.slice( 0,splitArray );
			// remove inner circle data from data.
			data.splice( 0,splitArray );
		}

		// add outer circle to page
		circleBox.append( outerCircle );
		Helpers.addPeopleToCircles( outerCircle, data, false );
		outerCircle.style.height = circleBoxWidth + 'px';

		if(displayInnerCircle === true ){

			outerCircle.append( innerCircle );
			Helpers.addPeopleToCircles( innerCircle, innerData, false );
		}

		window.addEventListener('resize', ChangeCircleHeight, false);

		function ChangeCircleHeight(){
			var newCircleBoxWidth = outerCircle.offsetWidth,
				peopleCircles = document.querySelectorAll('.outer-circle > .small-thumb');

			outerCircle.style.height =  newCircleBoxWidth + 'px';
			Helpers.addPeopleToCircles( outerCircle, peopleCircles, true );

			if(displayInnerCircle === true ){

				let peopleCirclesInner = document.querySelectorAll('.inner-circle > .small-thumb');;

				Helpers.addPeopleToCircles( innerCircle, peopleCirclesInner, true );

			}
		}

	}
}