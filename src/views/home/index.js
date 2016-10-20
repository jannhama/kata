import './home.scss';


export default ngModule => {
    console.log('home');
    require('./home').default(ngModule);
    //require('../../components/nv-hello').default(ngModule);
};


