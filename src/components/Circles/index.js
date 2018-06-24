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
			random = config.dataRandom,
			numberTestimonials = parseInt(config.dataNumber),
			displayInnerCircle = false,
			innerData;

		// check if random is set to true then shuffle the array to make it more interesting!
		if( random == 'true' ){ Helpers.shuffleArray( data ); }

		// gets the number of people in the array and caps it at 20 if more than 20
		let dataCap = data.length < 20 ? data.length : 20;

		// sets the data length to the number the user has specified if less than the data cap value
		let finalNumber = numberTestimonials <= dataCap ? numberTestimonials : dataCap;

		// slice the data so get the correct final number
		data = data.slice( 0, finalNumber );

		// if data length is greater than 5 people add an inner circle

		if( data.length > 5 ){

			// get length of one third of the data
			let splitArray = Math.round( data.length / 3 );
			// set display circle to true
			displayInnerCircle = true;
			// get the data for the inner circle
			innerData = data.slice( 0, splitArray );
			// remove inner circle data from data.
			data.splice( 0, splitArray );
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