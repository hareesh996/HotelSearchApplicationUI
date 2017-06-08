var fs  = require('fs');
//import fs from 'fs';

//let localeLabels = {};


/*
export function getLabel (key){
    let label = localeLabels[key];
    return label.value;
} */


// this initializes the locale on the load of the page.
export function getLabel(key){
    let navLocale = navigator.language;
    let localeLabels = getLabelsBasedOnLocale(navLocale);
    let msg = localeLabels[key];
    if(msg != undefined){
        return msg.value;
    }
} 
// get labels
function getLabelsBasedOnLocale(navLocale){
    let localeLabels = {};
    //var locale = JSON.parse(fs.readFileSync('../../../static/i18n/locale-'+navLocale+'.js'));
    var locale = require('./locale-'+navLocale+'.js');
    return locale.labels;
}
