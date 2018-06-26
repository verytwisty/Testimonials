import config from '../../lib/config';
import Helpers from '../../lib/Helpers';
import Router from '../../lib/Router';
import Data from '../../lib/Data';

export default class Testimonial{
	static render(data, thumbnail, event){

		let circleBox = config.circleBox,
			textBox = config.textBox,
			toolTip = thumbnail.getElementsByClassName('tool-tip')[0],
			personName = Helpers.createPersonName( data.title.rendered, 'h2', 'name' ),
			btn = Helpers.createBackBtn(),
			blurb = Helpers.createNewBlurb(data.content.rendered, 'quote'),
			// personTitle = Helpers.createPersonTitle(data.vt_testimonials_jobtitle[0]);
			personTitle = data.vt_testimonials_jobtitle;

			console.log(data);

		toolTip.remove();
		thumbnail.classList.remove( 'small-thumb' );
		thumbnail.classList.add('large-thumb');
		thumbnail.setAttribute( 'style', "left: 0; top: 0;" );


		circleBox.append(thumbnail);
		circleBox.append( personName );

		// check to see if they have a job title, if so append it.

		if( personTitle.length != 0 ){
			circleBox.append( Helpers.createPersonTitle( personTitle[0] ) );
		}
		circleBox.append( btn );

		btn.addEventListener('click', makeCirclesPage , false );

		function makeCirclesPage(e){
			e.preventDefault();
			Router.makeCirclesPage()
		}

		textBox.append(blurb);

	}
}