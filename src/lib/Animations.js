import config from './config';


export default class Animations{

	static testimonialPicture(thumbnail){

		TweenLite.to( thumbnail, 0.2, 
			{
				left:0, top: 0, width: 200, height: 200, transform: "matrix(1, 0, 0, 1, -0, 0)", ease: Power4.easeOut,
				 onComplete: function() {
				    thumbnail.classList.add('large-thumb');
				  }

			} );
	}

	static testimonialDetails(el){

		TweenLite.to( el, 0.2, { autoAlpha: 1, delay: 0.3 } )

	}

	static testimonialBlurb( textbox ){
		TweenLite.fromTo( textbox, 0.2, { skewX:"30deg", scale:0.2}, { autoAlpha: 1, skewX:"0deg", scale:1, delay: 0.3 } )
	}

	static peopleCircle( person, x, y, ){
		TweenLite.to( person, 0.2, { autoAlpha: 1, x: x, y: y } );
	}
	static test( person, x, y ){
		let x1 = x / 2;
		let y1 = y / 2;
		// https://gamedev.stackexchange.com/questions/109099/moving-objects-in-a-circular-path-and-also-moving-the-whole-group?noredirect=1&lq=1
		// TweenLite.to( person, 2, { bezier:[ {x:100, y:100}, {x:0, y:200}, {x:-100, y:100}, {x:0, y:0} ], ease:Linear.easeNone } );
		TweenLite.to( person, 0.2, { bezier:[ {x:0, y:0}, {x:x1, y:y1}, {x:x, y:y} ], ease:Power4.easeOut } );
	}

}