import React, { Component } from 'react';
import SearchContainer from './search-container';
import SearchResultsContainer from './searchresults-container';
import SearchStatisticsContainer from './searchstatistics-container';

export default class DashBoardContainer extends Component {

    render() {
        return (
            <div className="dashBoardContainer container">
                <div className="row">
                    <div className="searchContainerDashBoard col-md-5">
                        <SearchContainer />
                    </div>
                    <div className="searchStatisticsContainerDashBoard col-md-5">
                        <SearchStatisticsContainer />
                    </div>
                </div>
                <div className="row">
                    <div className="searchResultsContainer col" >
                        <SearchResultsContainer />
                    </div>  
                </div>
            </div>
        );

    }

}