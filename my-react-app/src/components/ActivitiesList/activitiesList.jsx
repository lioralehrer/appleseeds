import React from "react";

class ActivitiesList extends React.Component {
    render() {
        if (this.props.activities && this.props.activities.length > 0) {
            return (
                <div>
                    <ul>
                        {this.props.activities.map((obj, index) =>
                            <li key={index}>{`What: ${obj.what}   When:  ${obj.when}   Where: ${obj.where}`}</li>)}
                    </ul>
                </div>
            )
        }
        return (
            <div>no activities yet.</div>
        )
    }



}
export default ActivitiesList;
