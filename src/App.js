import './sass/style.scss';
import Router from './lib/Router.js';
import Textbox from './components/Textbox/index.js';

export default class App {

	static init(){
		Textbox.storeTextLocalhost();
		Router.makeCirclesPage();
	}

}

App.init();