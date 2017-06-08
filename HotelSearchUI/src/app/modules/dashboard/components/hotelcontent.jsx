import React,{Component,PropTypes} from 'react';



/**
 * Displays the Hotel Description as overview.
 * The Hotel Content taks the below json as input,
 *  {   
 *      hotelId : <unique id of the hotel >,
 *      name : <name of the hotel>,
 *      totalLikes : <no of likes for the hotel>,
 *      link : < hotel link >,
 *      location : { 
 *                  line1 : <address line 1>,
 *                  line2 : <addree line 2>,
 *                  city : {
 *                          name : <name of the city>,
 *                          value : <unique id of the city>
 *                          },
 *                  country : {
 *                          name : <name of the country>,
 *                          value : <unique id of the country>
 *                          }
 *                  },
 *      totalLikes : <total no of likes of the hotel >,
 *      amount :{
 *                  actualPrice :
 *                  discountedPrice :
 *                  discountPercentage :
 *                  currency : {
 *                             currencyName : <currency> 
 *                          }
 *              }
 * }
 *              
 * }
 * 
 */
class HotelContent extends Component{

    constructor(props){
        super(props);
    }

    render(){
        const {name,totalLikes,link,location,amount} = this.props.hotelData;
        return( <div>
                <h2>{name}</h2>
                <div>
                    <label>Locality : </label> <p>{location.line1} {location.line2}, {location.city.name} {location.country.name} </p>
                </div>
                <div>
                    <table>
                        <tbody>
                            <tr>
                                <td>Link : <a href={link}>{link}</a></td>
                            </tr>
                            <tr>
                                <td>Actual Price: {amount.actualPrice} {amount.currency.currencyName}</td>
                            </tr>
                            <tr>
                                <td>Final Price : {amount.discountedPrice} {amount.currency.currencyName}</td>
                            </tr>
                            <tr>
                                <td>Discount : {amount.discountPercentage}%</td>
                            </tr>
                            <tr>
                                <td>Total Likes : {totalLikes}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }

}

HotelContent.propTypes = {
    hotelId : PropTypes.string.isRequired,
    hotelData : PropTypes.object.isRequired
}

export default HotelContent;