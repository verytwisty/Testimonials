import config from './config';
import Helpers from './Helpers';
import Data from '../components/Data/index.js';
import Testimonial from '../components/Testimonial/index.js';

export default class Router{
	static makeCirclesPage(){
		Helpers.clearPage();
		Data.render();
	}
	static makeTestimonialPage(thumbnail, event){
		// remove all event listeners.
		Helpers.resetEventListenersCircles();

		// clear page
		Helpers.clearPage();
		// render single testimonial
		Testimonial.render( this, thumbnail, event )
	}
}