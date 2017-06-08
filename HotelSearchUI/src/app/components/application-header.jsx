

import React,{Component} from 'react';
import Labelresolver from './label-resolver/language-resolver';

export default class ApplicationHeader extends Component{

    render(){
        return (
            <header className="header">
                <div className="headerText">
                    <h1>Hotel Search</h1>
                </div>
            </header>
        )
    }
}

//<LabelResolver msgKey="com.hotel.header.name" />