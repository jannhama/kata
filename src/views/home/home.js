/**
 *
 * (c) 2016 Janne Hämäläinen
 *
 */



'use strict';

// dictionary is loaded from JSON file
import dict from './dict';
import {algCheckDoubleQuotes, algSeekAndReplace} from './algorithm';

// controller for this home page
class HomeController {
    /* @ngInject */
    constructor($timeout) {
        this.$timeout = $timeout;
        this.homeText = 'Dictionary "kata" example using ES6 & AngularJS';
        this.hideItem = true;
        this.queryString = '';
        this.result = '';
        this.dict = this.dict = Object.assign({}, dict.items);
    }


    /**
     * Check that input string has both starting and ending double quotes
     * @param source
     * @returns {boolean|*}
     */
    checkDoubleQuotes(source) {
        return (algCheckDoubleQuotes(source) && this.hideItem);
    }


    /**
     * Search the dictionary with given search string
     * We call this from the html file
     * @param searchString
     * @param dictionary
     */
    seekAndReplace(searchString, dictionary) {
        this.result = algSeekAndReplace(searchString, dictionary);
        this.hideItem = false;
        // small delay to before hiding the results
        this.$timeout(() => {
            this.hideItem = true
        }, 4000);
    }
}


// regular module export and directive
export default (ngModule) => {
    ngModule.controller('HomeController', HomeController);
    ngModule.directive('homeView', () => {
        console.log('directive home init');
        return {
            restrict: 'E',
            scope: {},
            template: require('./home.html'),
            controllerAs: 'ctrl',
            controller: HomeController
        };
    })
};
