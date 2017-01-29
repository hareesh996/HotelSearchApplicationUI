import {labels as USLabels} from "./locale-US";

//let localeLabels = {};

const locale = [
    {
        "locale": "en-US",
        "labels" : USLabels 
    }
]

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
    locale.map((lang) => {
        if (lang.locale == navLocale) {
            localeLabels = lang.labels;
        }
    });
    return localeLabels;
}
