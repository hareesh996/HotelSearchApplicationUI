import React, {Component} from 'react';
import ApplicationHeader from 'components/application-header';
import ApplicationFooter  from 'components/application-footer';


export default class App extends Component{

    render(){

        return (
            <div>
            <div>
                <ApplicationHeader />
            </div>
            <div>
                {this.props.children}
            </div>
            <div>
                <ApplicationFooter />
            </div>
            </div>
        )
    }

}