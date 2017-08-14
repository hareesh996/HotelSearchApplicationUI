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
        const {name,totalLikes,link,img,location,amount} = this.props.hotelData;
        return( <div className="hotelContent row col-md-5">
                <div className="hotelBody col-md-6">
                    <div className="hotelHeader">
                        <h3>{name}</h3>
                        <div className="hotelLocality">
                            <p>{location.line1}, {location.line2} {location.city.name}, {location.country.name}</p>
                        </div>
                    </div>
                    <div className="hotelDetails">
                        <div><label>Link :</label> <a href={link}>{link}</a></div>
                        <div><label>Actual Price : </label> <span>{amount.actualPrice} {amount.currency.currencyName}</span></div>
                        <div><label>Final Price :  </label> <span>{amount.discountedPrice} {amount.currency.currencyName}</span></div>
                        <div><label>Discount :  </label> <span>{amount.discountPercentage}%</span></div>
                        <div><label>Total Likes :  </label> <span>{totalLikes}%</span></div>
                    </div>
                </div>
                <div className="hotelImg col-md-6" >
                        <img src={img}/>
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