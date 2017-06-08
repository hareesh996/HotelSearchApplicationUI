import React, {Component} from 'react';
import _ from 'lodash';
import HotelContent from '../components/hotelcontent';
import {connect} from 'react-redux';

/**
 * This container will hold the search results.
 */
class SearchResults extends Component{

    render(){
        const hasError = this.props.searchError;
        if(!hasError){
            return displayError(hasError);
        }
        if(!searchResults){
            return (<div>No elements found</div>)
        }
        let totalColumns = this.getTotalColumnsToConsider();
        let totalNoOfRows = Math.round(this.props.searchResults.length/ totalColumns);
        var searchResults = this.props.searchResults;
        var chunkHotelResults = _.chunk(searchResults,totalColumns);
        return (
           <div>
                {
                    _.forEach(chunkHotelResults,this.displayHotels)
                }

           </div>
        );
    }
    
    /**
     * Gets the total columns need to be considered for displaying the results
     */
    getTotalColumnsToConsider = ()=>{
        var searchResults = this.props.searchResults;
        var totalData = searchResults.length;
        if(totalData == 0)
            return 0;
        if(totalData > 10){
            return 5;
        }
        return 3;
    }

    displayHotels = (hotels)=>{
       var hotelElements = _.forEach(hotels,function(hotelData){
            return <HotelContent hotelId={hotelData.hotelId} hotelData={hotelData} /> 
        })
        return (
            <div>
                {hotelElements}
            </div>
        )
    }

    /**
     * Displays the error
     */
    displayError = (searchError)=>{
        return <div>
            There is an error while searching we will fix it. Please consider difference search criteria to find Hotels.
        </div>
    }

}

const mapStateToProps = (state)=>{
    return {
        searchResults : state.hotelSearchReducer.get("hotelSearchData"),
        searchError : state.hotelSearchReducer.get("hotelSearchError")
    }
}

const SearchResultsContainer = connect(mapStateToProps,null)(SearchResults);
export default SearchResultsContainer;