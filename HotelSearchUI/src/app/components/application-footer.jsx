import React,{Component} from 'react';
import { Labelresolver } from './label-resolver/language-resolver';

export default class ApplicationFooter extends Component{

    render(){
        return (
            <footer className="footer">
                <div className="footerText">
                   <h2>@c Copy right Strikers Developer</h2>
                </div>
            </footer>
        )
    }
}
// <Labelresolver msgKey="com.hotel.footer.name" />