import React, {Component} from 'react';
import _ from 'lodash';
import HotelContent from '../components/hotelcontent';
import {connect} from 'react-redux';
import * as actions from '../actions/search-actioncreators';
/**
 * This container will hold the search results.
 */
class SearchResults extends Component{

    render(){
         if(!this.props.isSearchCompleted){
            // need to add loading functionlity here.
            return <div>Loading</div>;;
        }
        const hasError = this.props.searchError;
        if(!hasError){
            return this.displayError(hasError);
        }
        if(!this.props.searchResults){
            return (<div>No elements found</div>)
        }
        let totalColumns = 2;//this.getTotalColumnsToConsider();
        let totalNoOfRows = Math.round(this.props.searchResults.length/ totalColumns);
        var searchResults = this.props.searchResults;
        var chunkHotelResults = _.chunk(searchResults,totalColumns);
        return (
           <div>
                {
                    _.map(chunkHotelResults,this.displayHotels)
                }

           </div>
        );
    }

    /**
     * On the initial load of the component, we will get the hotel search results.
     */
    componentDidMount(){
        var initialLoad = {};
        var headers = {};
        this.props.submitSearch(initialLoad,headers);
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
       var hotelElements =_.map(hotels,function(hotelData){
            return <HotelContent hotelId={hotelData.hotelId} hotelData={hotelData} /> ;
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

/**
 * Register the actions to the props of the HotelSearchComponent
 * @param {*} dispatch 
 */
const mapDispatchToProps = (dispatch) => {
    return {
        submitSearch : (searchPayLoad, headers) => dispatch(actions.searchHotels(searchPayLoad,headers))
    }
}

const mapStateToProps = (state)=>{
    return {
        searchResults : state.hotelSearchReducer.get("hotelSearchData"),
        searchError : state.hotelSearchReducer.get("hotelSearchError"),
        isSearchCompleted : state.hotelSearchReducer.get("hotelSearchStatisticsLoaded")
    }
}

const SearchResultsContainer = connect(mapStateToProps,mapDispatchToProps)(SearchResults);
export default SearchResultsContainer;