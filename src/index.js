import 'normalize.css';
import './styles.css';
import init from './home.js'

//onsole.log(init().createHeader())

const content = document.querySelector('#content');
init(content);
