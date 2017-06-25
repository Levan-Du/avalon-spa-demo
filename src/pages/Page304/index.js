import './index.css';
import avalon, { component } from 'avalon2';
import { parseCssModule } from '../../services/parseCssModule';

// console.log(parseCssModule(styles, require('./index.html'));

component('ms-page304', {
    template: require('./index.html'),
    defaults: {
        query: {},
        queryString: '',
        onInit(e){
        	// console.log(this.shown);
        }
    }
})
