import React,{Component} from 'react';
import * as actions from '../actions/search-actioncreators';
import {connect} from 'react-redux';
import SearchStatus from '../components/searchstatus';
/**
 * Holds the statistics data of the search results.
 */
class SearchStatistics extends Component{

    render(){
        if(!this.props.isSearchCompleted){
            // need to add loading functionlity here.
            return <div>Loading</div>;
        }
        const hasError = this.props.searchError;
        if(!hasError){
            return this.displayError(hasError);
        }
        if(!this.props.searchStatus){
            return (<div>No elements found</div>)
        }
        return (
        <div>
            <SearchStatus searchStatus={this.props.searchStatus}/>
        </div>
        );
    }

    /**
     * On first load of the component, make backend to call to have status for the default search.
     */
    componentDidMount(){
        var payload = {};
        var headers = {};
        this.props.getHotelSearchStatus(payload,headers);
    }

    displayError(errorData){
        return (
            <div>
                There is an error while searching we will fix it. Please consider difference search criteria to find Hotels.
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        searchStatus : state.hotelSearchReducer.get("hotelSearchStatistics"),
        searchError : state.hotelSearchReducer.get("hotelSearchStatisticsError"),
        isSearchCompleted : state.hotelSearchReducer.get("hotelSearchDataLoaded")
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        getHotelSearchStatus : (searchPayload,headers) => dispatch(actions.getSatisticsOfHotelSearch(searchPayload,headers))
    }
}

const SearchStatisticsContainer = connect(mapStateToProps,mapDispatchToProps)(SearchStatistics);
export default SearchStatisticsContainer;