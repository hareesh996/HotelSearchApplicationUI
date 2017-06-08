import request from 'superagent';
import * as actionTypes from './search-actions';

const baseURL = process.env.API_URL;

/**
 * an action function that searches the hotel based on the 'searchPayload'.
 * @param {*} searchPayload 
 * @param {*} headers 
 */
export function searchHotels( searchPayload, headers){
    return (dispatch)=>{
        request.post(`${baseURL}/hotelsearch/search`)
        .send(searchPayload)
        .then(searchHotelSuccessHandler,searchHotelErrorHandler)
    }
}

/**
 * The success function upon calling the search api function.
 * @param {*} responseData : The response of the search hotel api 
 */
function searchHotelSuccessHandler(responseData){
    var hotelData = responseData.data;
    saveSearchedHotel(hotelData);
}

/**
 * Action creator to store the searched hotel.
 * @param {*} hotelData 
 */
function saveSearchedHotel(hotelData){
    return {
        type : actionTypes.SAVE_SEARCHED_HOTELS,
        hotelSearchData :responseData
    }
}

/**
 *  The error handler for the search hotel api
 * @param {*} errorResponse 
 */
function searchHotelErrorHandler(errorResponse){
    var errorData = errorResponse.response.body;
    saveSearchHotelError(errorData);
}
/**
 * Action creator to save the error response.
 * @param {*} errorData 
 */
function saveSearchHotelError(errorData){
    return {
        type : actionTypes.SAVE_SEARCH_HOTEL_ERROR,
        hotelSearchError : errorResponse
    }
}