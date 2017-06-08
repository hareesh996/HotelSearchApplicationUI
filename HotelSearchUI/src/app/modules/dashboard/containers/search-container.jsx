import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import HotelSearchForm from '../components/hotelsearch';
import {connect} from 'react-redux';
import * as actions from '../actions/search-actioncreators';

/**
 * The container which holds the elements needed for the search.
 */
class HotelSearchComponent extends Component {

    render() {
        return (
            <HotelSearchForm onSubmitHandler={this.props.submitSearch}>
            </HotelSearchForm>
        );
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

/**
 * Export the HotelSearchContainer with actionCreators
 */
const HotelSearchContainer = connect(null,mapDispatchToProps)(HotelSearchComponent);
export default HotelSearchContainer;