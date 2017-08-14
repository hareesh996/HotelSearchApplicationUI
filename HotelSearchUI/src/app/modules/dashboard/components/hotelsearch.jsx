import React, { Component, PropTypes } from 'react';
import {reduxForm} from 'redux-form';
import FormField from '../../../components/formfield';
import _ from 'lodash';
import {connect} from 'react-redux';

const firstLevelFields = [
    {   
        rootDivClassName : "searchText",
        id: "searchText",
        type: "text",
        name: "searchText",
        label: "",
        initialValue: "",
        placeholder: "Search Hotel"
    }
]

const secondLevelFields = [
    {
        rootDivClassName: "sortBy",
        id: "sortByCountry",
        type: "radio",
        name: "sortBy",
        label: "Country",
        isChecked: true,
        initialValue: "country"
    },
    {
        rootDivClassName: "sortBy",
        id: "sortByLike",
        type: "radio",
        name: "sortBy",
        label: "Like",
        isChecked: false,
        initialValue: "like"
    },
    {
        rootDivClassName: "sortBy",
        id: "sortByPrice",
        type: "radio",
        name: "sortBy",
        label: "Price",
        isChecked: false,
        initialValue: "price"
    }
];

// this will hold all the names of the input elements that would be displayed within the ReduxForm.
const fieldNames = ["searchText", "sortBy"]

class HotelSearch extends Component {

    render() {  
        return (
            <form className="container" onSubmit={this.props.handleSubmit(this.searchSubmitHandler.bind(this))}>
                <div className="searchTxtContainer">
                    {_.flatMap(firstLevelFields, this.renderReduxField.bind(this))}
                </div>
                <div className="sortContainer">
                    <div className="sortByHeader"><label>Sort By</label></div>
                    <div className="sortContainer">
                        {_.flatMap(secondLevelFields, this.renderReduxField.bind(this))}
                    </div>
                </div>
            </form>
        );
    }

    /**
    * Constructs the Input HTML Element based on the fieldObject.
    */
    renderReduxField = (fieldObj, index) => {
        let reduxPropOfAField = this.props.fields[fieldObj.name];
        return (
            <FormField type={fieldObj.type} key={fieldObj.id} fieldProps={fieldObj} reduxProps={reduxPropOfAField} />
        );
    }

    searchSubmitHandler = (values, dispatch) => {
        var searchPayLoad = {
            "searchName" : values.searchText,
            "sortingItem" : values.sortBy,
            "pageNo" : 1,
            "offSet" : 10
        }
        this.props.onSubmitHandler(searchPayLoad);
    }

}

/**
 * Validator function : Synchronize validation, 
 * Will be called before submission to the backend.
 */
const validateSearchContainer = (values)=>{
    const errors = {}
    if (!values.sortBy) {
        errors.sortBy = "Select atleast one Sorting Item";
    }
    return errors;
}

HotelSearch.propTypes = {
    fields: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    onSubmitHandler: PropTypes.func.isRequired
}

const HotelSearchForm = reduxForm({
    form: "hotelSearchForm",
    fields: fieldNames,
    validateSearchContainer
})(HotelSearch);

export default HotelSearchForm;
