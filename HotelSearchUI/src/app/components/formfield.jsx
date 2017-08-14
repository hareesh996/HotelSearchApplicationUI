import React, { Component, PropTypes } from 'react';
import { Utils } from '../utils/utils';

/**
 * A reusable component to display the form element.
 *  "for-inputs"
 *  
 *  "type" :
 * 
 *      "text" :{
 *              "type" : "This will be of type text", 
 *              "label" : "The label associate to the input element.If the label is empty/undefined nothing will be displayed. It means, label element itself will not created for the input element."
 *              "name" : "name of the input element",
 *              "placeholder" :"place holder of the text",
 *              "id" : "id of the element",
 *              "initialValue" : "initial-value of the element",
 *              "className" : "",
 *              "rootDivClassName" : ""
 *          }
 *      "radio" :{
 *              "type" : "This will be of type radio",
                "name" : "name of the input elemet",
                "label" : "The label for the associate the input element. If the label is empty/undefined nothing will be displayed.If the label is empty/undefined nothing will be displayed. It means, label element itself will not created for the input element."
                "id" : "id of the element",
                "isChecked" : "Is the radio button is selected (true/false)",
                "label" : "",
                "className" : "",
                "rootDivClassName" : ""
 *      }
 * 
 * 
 */
// Supported types
const FieldTypes = ["text", "radio"]

class FormField extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const type = this.props.type;
        var renderingElement = "";
        switch (type) {
            case "text":
                renderingElement = this.renderTextElement(this.props);
                break;
            case "radio":
                renderingElement = this.renderRadioElement(this.props);
                break;
            default:
                renderingElement = <div>Unknown Element</div>;
        }
        return(
            <div className={this.props.fieldProps.rootDivClassName}>
                {renderingElement}
                <div className="errorClass">
                    {this.props.reduxProps.touched ? this.props.reduxProps.error : " "}
                </div>
            </div>
        )
    }

    renderTextElement = ({fieldProps :{ label, name, placeholder, id, initialValue, className},reduxProps }) => {
        if (!Utils.isEmpty(label)) {
            return (
                <div>
                    <label>{label}</label>
                    <input type="text" {...reduxProps} placeholder={placeholder} value={initialValue} id={id} className={className} />
                </div>
            );
        }
        return (
            <div>
                <input type="text" {...reduxProps} placeholder={placeholder} id={id} className={className} />
            </div>
        );
    }

    renderRadioElement = ({ fieldProps:{label, name, id,initialValue, className} ,reduxProps }) => {
        if (!Utils.isEmpty(label)) {
            return (
                <div>
                    <input type="radio" {...reduxProps} name={name} value={initialValue} id={id} className={className} />
                    <label>{label}</label>
                </div>
            );
        }
        return (
            <div>
                <input type="radio" {...reduxProps} name={name} id={id} value={initialValue} className={className} />
            </div>
        );
    }

}

FormField.propTypes = {
    reduxProps: PropTypes.object.isRequired,
    fieldProps : PropTypes.object.isRequired,
    type : PropTypes.string.isRequired
}

export default FormField;