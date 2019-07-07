import React from "react";
import "./ActivitiesForm.css"
class ActivitiesForm extends React.Component{
    constructor(){
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInpupChange = this.handleInpupChange.bind(this);
        this.state=({
            what:"",
            when:"",
            where:""
        })
    }
    handleSubmit(e){
        // copy the state and give it to handleNewActivity
        this.props.handelNewActivity(Object.assign({},this.state));
        }
    handleInpupChange(e){
        let inputValue = e.target.value;
        let stateKey = e.target.getAttribute("data-bind");
        
        // one way to change the state:
        // let newState = {};
        // newState[stateKey] = inputValue;
        // this.setState(newState);

        // another way to change the state:
        this.setState({
           [stateKey] : inputValue
        })
    }    
    
    render(){
        return( 
            <div>
                <input className="activity-input" data-bind="what" onChange={this.handleInpupChange} type="text" placeholder="what?"/>
                <input className="activity-input" data-bind="when" onChange={this.handleInpupChange}type="text" placeholder="when?"/>
                <input className="activity-input" data-bind="where" onChange={this.handleInpupChange} type="text" placeholder="where?"/>
                <button className="btn btn-primary" onClick={this.handleSubmit}>Submit Activity</button>
            </div>
        )
    }
}
export default ActivitiesForm;

