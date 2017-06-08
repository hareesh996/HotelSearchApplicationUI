import React,{Component,PropTypes} from 'react';
import {getLabel} from './language-resolver-helper';

class LabelResolver extends Component{

    constructor(props){
        super(props);
    }

    render(){
        const label = getLabel(this.props.msgKey);
        return (<div>${label}</div>);
    }

}

LabelResolver.propTypes = {
    msgKey : PropTypes.string.isRequired
}

export default LabelResolver;