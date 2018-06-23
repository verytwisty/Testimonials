import config from '../../lib/config';
import Helpers from '../../lib/Helpers';
import Data from '../../lib/Data';

export default class Textbox{

	static render(){
	let blurbJson = localStorage.getItem('testimonialBlub'),
		blurb = JSON.parse(blurbJson),
		textBox = config.textBox;

		textBox.innerHTML = blurb;
	}

	static storeTextLocalhost(){
		let blurbText = config.textBox.innerHTML;
		blurbText = JSON.stringify(blurbText);

		localStorage.setItem( 'testimonialBlub', blurbText );
	}
}