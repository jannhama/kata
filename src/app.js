/**
 *
 * (c) 2016 Janne Hämäläinen
 *
 */


import angular from 'angular';
import 'angular-ui-bootstrap';
import 'angular-animate';
import 'angular-ui-router';
import '../styles/main.scss';

const ngModule = angular.module('app',['ui.bootstrap','ngAnimate']);
require('./views').default(ngModule);

