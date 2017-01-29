import React,{Component,PropTypes} from 'react';
import {getLabel} from 'static/i18n/locale';

class LabelResolver extends Component{

    constructor(props){
        super(props);
    }

    render(){
        const label = getLabel(this.props.msgKey);
        return <span>Resolver</span>;
    }

}

LabelResolver.propTypes = {
    msgKey : PropTypes.string.isRequired
}

export default LabelResolver;