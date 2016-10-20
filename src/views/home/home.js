/**
 *
 * (c) 2016 Janne Hämäläinen
 *
 */



'use strict';

// template for the page
import tpl from './home.html';

// dictionary is loaded from JSON file
import dict from './dict';

// controller for this home page
class HomeController {
    /* @ngInject */
    constructor($timeout) {
        console.log('homectrl cons.');
        this.$timeout = $timeout;
        this.homeText = 'Dictionary "kata" example using ES6 & AngularJS';
        this.hideItem = true;
        this.queryString = '';
        this.result = '';
        this.dict = Object.assign({}, dict.items);
    }

    /**
     * Check that input string has both starting and ending double quotes
     * @param source
     * @returns {boolean|*}
     */
    checkDoubleQuotes(source) {
        let result;
        // reg exp result has four items: full result, group1, group2 and group3
        const doubleQuoteResultLength = 4;
        // capture groups for starting " , text and ending "
        const checkDoubleQuotes = /(^")(.*?)("$)/;
        const quoteCheck = source.match(checkDoubleQuotes);
        // check that we have a result and that result length is what it is supposed to be
        result = ((quoteCheck !== null) && (quoteCheck.length === doubleQuoteResultLength));
        return result;
    }


    /**
     * Search the dictionary with given search string
     * We call this from the html file
     * @param searchString
     * @param dictionary
     */
    seekAndReplace(searchString, dictionary) {
        // just a small helper function to get correct string from the dictionary object
        function findDictionaryKeys(stringToSearch) {
            const res = dictionary[stringToSearch];
            return (res === undefined) ? stringToSearch : res;
        }

        // we will fill the resulting string here
        let result = this.queryString;

        // search pattern for dollar prefixed & suffixed string
        // using greedy to get all the results
        const pattern = /\$[a-z]+\$/g;
        const parseResult = searchString.match(pattern);

        // if got string parsed with regexp then process those
        if (parseResult) {
            parseResult.forEach((item) => {
                const trimmedString = item.slice(1, item.length - 1);
                let findResult = findDictionaryKeys(trimmedString);
                if (findResult !== trimmedString) {
                    console.log('Find Dictionary:' + findResult);
                    result = result.replace(item, findResult);
                }
                else {
                    console.log("Didn't find string");
                }
            })
        }

        this.result = result;
        console.log(result);
        this.hideItem = false;
        // small delay to before hiding the results
        this.$timeout(() => {
            this.hideItem = true
        }, 4000);
        // result will be also returned although not used in this example.
        return result;
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
            template: tpl,
            controllerAs: 'ctrl',
            controller: HomeController
        };
    })
};