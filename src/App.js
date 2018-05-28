import './sass/style.scss';
import config from './lib/config.js';
import Circles from './components/Circles/index.js'

export default class App {

	static init(){
		Circles.render();
	}

}

App.init();