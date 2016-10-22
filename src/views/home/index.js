/**
 *
 * (c) 2016 Janne Hämäläinen
 *
 */

import './home.scss';

export default ngModule => {
    console.log('home');
    require('./home').default(ngModule);
};


