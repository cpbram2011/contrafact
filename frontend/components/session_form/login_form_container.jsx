import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {login, receiveSessionErrors} from '../../actions/session_actions';
import SessionForm from './session_form'

const mSTP = state => ({
    errors: state.errors.session,
    formType: "Log In"
});

const mDTP = dispatch => ({
    action: user => dispatch(login(user)),
    guest: guest => dispatch(login(guest)),
    clearErrors: () => dispatch(receiveSessionErrors([]))
});

export default connect(mSTP, mDTP)(SessionForm)



