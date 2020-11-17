import React from 'react';
import {connect} from 'react-redux';


const mSTP = state => ({
    alert: state.ui.alert

})


class Alert extends React.Component {

    render () {
        <div className="alert">
            <p>{this.props.alert}</p>
        </div>
    }
}