import avalon, { component } from 'avalon2';
import './index.css';

component('ms-tabtitle', {
    template: require('./index.html'),
    defaults: {
        item: {},
        parseHref(path) {
            if (!path)
                return '';
            else if (path === '/') {
                return '';
            } else {
                return '#' + path;
            }
        },
        ifIconVisible(path) {
            if (!path || path === '/' || path === '/home') {
                return false;
            } else {
                return true;
            }
        },
        click(e, item) {},
        close(e, item) {

        }
    }
})
