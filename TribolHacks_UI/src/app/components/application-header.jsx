

import React,{Component} from 'react';
import LabelResolver from 'labelresolver';

export default class ApplicationHeader extends Component{

    render(){
        return (
            <header className="header">
                <div className="headerText">
                    <h1><LabelResolver msgKey="com.hotel.header.name" /> </h1>
                </div>
            </header>
        )
    }
}