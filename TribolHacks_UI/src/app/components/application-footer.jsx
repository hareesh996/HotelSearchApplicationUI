import React,{Component} from 'react';
import Labelresolver from 'react-npm-boilerplate';

export default class ApplicationFooter extends Component{

    render(){
        return (
            <footer className="footer">
                <div className="footerText">
                    <labelresolver msgKey="com.hotel.footer.name" />
                </div>
            </footer>
        )
    }
}