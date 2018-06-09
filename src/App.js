import './sass/style.scss';
import config from './lib/config.js';
import Circles from './components/Circles/index.js'
import Data from './components/Data/index.js'

export default class App {

	static init(){
		// Circles.render();
		Data.render();
	}

}

App.init();