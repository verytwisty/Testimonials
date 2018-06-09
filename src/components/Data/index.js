import config from '../../lib/config';
import Circles from '../Circles/index.js';

export default class Data{
	static render(){
		config.wp.testimonials()
		.embed()
		.perPage( 15 )
		.then( testimonials => {

		Circles.render(testimonials);

		}).catch( err => {

			console.log(err);

		} );
	}
}