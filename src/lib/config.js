import WPAPI from 'wpapi';

let config = {
	testimonial: document.querySelector('#testimonials-body'),
	circleBox: document.querySelector('.testimonials-circle'),
	textBox: document.querySelector('.testimonials-text'),
	dataNumber: document.querySelector('#testimonials-body').getAttribute('data-number'),
	dataRandom: document.querySelector('#testimonials-body').getAttribute('data-random'),
	apiRoot: 'http://js4wp.test/wp-json/',
};

config.wp = new WPAPI( { endpoint: config.apiRoot } );

var namespace = 'wp/v2'; // use the WP API namespace
var route = '/vt_testimonials/(?P<id>)'; // route string - allows optional ID parameter

 // wpapi = an instance of `node-wpapi`
config.wp.testimonials = config.wp.registerRoute(namespace, route);

export default config;