import React from "react";
import ActivitiesList from "../ActivitiesList/activitiesList";
import ActivitiesForm from "../ActivitiesForm/ActivitiesForm";
class ActivitiesContainer extends React.Component {
    constructor() {
        super();
        this.state = ({
            activities: [
            //     {
            //     what: "programming",
            //     when: "every day",
            //     where: "Appleseeds"
            // },{
            //     what: "eating",
            //     when: "13:00",
            //     where: "everywhere"
            // }
        ],
        })
        this.handelNewActivity = this.handelNewActivity.bind(this);
    }
    handelNewActivity(activity){
        this.setState({
            activities : [...this.state.activities,activity]
        })
    }
    render() {
        return (
            <div>
                <ActivitiesForm handelNewActivity={this.handelNewActivity}/>
                <ActivitiesList activities={this.state.activities}/>
            </div>
        )
    }
}

export default ActivitiesContainer;