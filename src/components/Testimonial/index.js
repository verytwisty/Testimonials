import config from '../../lib/config';
import Helpers from '../../lib/Helpers';
import Router from '../../lib/Router';
import Data from '../../lib/Data';

export default class Testimonial{
	static render(data, thumbnail, event){

		let circleBox = config.circleBox,
			textBox = config.textBox,
			toolTip = thumbnail.getElementsByClassName('tool-tip')[0],
			personName = Helpers.createPersonName( data.name, 'h2', 'name' ),
			btn = Helpers.createBackBtn(),
			blurb = Helpers.createNewBlurb(data.testimonial, 'quote'),
			personTitle = Helpers.createPersonTitle(data.title);

		toolTip.remove();
		thumbnail.classList.remove( 'small-thumb' );
		thumbnail.classList.add('large-thumb');
		thumbnail.setAttribute( 'style', "left: 0; top: 0;" );


		circleBox.append(thumbnail);
		circleBox.append( personName );
		circleBox.append( personTitle );
		circleBox.append( btn );

		btn.addEventListener('click', Router.makeCirclesPage, false );

		textBox.append(blurb);

		// console.log( personName );
		// console.log(event);
		// console.log(thumbnail);

	}
}