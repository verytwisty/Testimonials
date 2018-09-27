import config from '../../lib/config';
import Helpers from '../../lib/Helpers';
import Router from '../../lib/Router';
import Data from '../../lib/Data';
import Animations from '../../lib/Animations';

export default class Testimonial{
	static render(data, thumbnail, event){

		let circleBox = config.circleBox,
			textBox = config.textBox,
			toolTip = thumbnail.getElementsByClassName('tool-tip')[0],
			personName = Helpers.createPersonName( data.title.rendered, 'h2', 'name' ),
			btn = Helpers.createBackBtn(),
			blurb = Helpers.createNewBlurb(data.content.rendered, 'quote'),
			personTitle = data.vt_testimonials_jobtitle,
			jobTitle;

		toolTip.remove();

		circleBox.append(thumbnail);
		circleBox.append( personName );

		// check to see if they have a job title, if so append it.

		if( personTitle.length != 0 ){
			let jobTitle = Helpers.createPersonTitle( personTitle[0] );
			circleBox.append( jobTitle );
		}
		circleBox.append( btn );

		btn.addEventListener('click', makeCirclesPage , false );

		function makeCirclesPage(e){
			e.preventDefault();
			Router.makeCirclesPage()
		}

		textBox.append(blurb);


		Animations.testimonialPicture(thumbnail);
		Animations.testimonialDetails(btn);
		Animations.testimonialDetails(personName);

		if( personTitle.length != 0 ){
			let jobTitle = document.querySelector('h3.job-title');
			Animations.testimonialDetails(jobTitle);
		}

		Animations.testimonialBlurb(blurb);

	}
}