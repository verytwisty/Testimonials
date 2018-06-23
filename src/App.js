import './sass/style.scss';
import config from './lib/config.js';
import Circles from './components/Circles/index.js';
import Data from './components/Data/index.js';
import Router from './lib/Router.js';
import Textbox from './components/Textbox/index.js';

export default class App {

	static init(){
		Textbox.storeTextLocalhost();
		Router.makeCirclesPage();
	}

}

App.init();