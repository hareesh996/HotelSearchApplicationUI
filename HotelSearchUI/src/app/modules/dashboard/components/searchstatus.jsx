import React,{Component} from 'react';


/**
 * A componet that displays the hotel search statistics, like total likes of the hotels, total counts.
 * The expected JSON Data for the searchStatus is as below,
 * {
        "hotelCounts" : 200,
        "totalLikes" : 200,
        "maxPrice" : 4000,
        "minPrice" : 2000,
        "avgRating" : 4.0
    }
 * 
 */
class SearchStatus extends Component{


    render(){
        let {totalLikes,hotelCounts,avgRating,maxPrice,minPrice} = this.props.searchStatus;
        return (
            <div className="searchStatsContent">
                <div className="searchStatsHeader">
                    <h4>Stats :</h4>
                </div>    
                <div className="searchStatsDetails">
                    <div> <label>Total Likes : </label> <span>{totalLikes}</span> | <label># Of Hotels :</label><span>{hotelCounts}</span></div>
                    <div><label>Avg. Rating :</label> <span>{avgRating}</span> | <label>Max. /Min. Price :</label><span>{maxPrice}/{minPrice}</span></div>
                </div>
            </div>    
        )
    }
 

}



export default SearchStatus;