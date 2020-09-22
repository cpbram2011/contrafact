import React from 'react';
import {connect} from 'react-redux';
import {signup} from '../../actions/session_actions';
import SessionForm from './session_form';

const mSTP = state => ({
    errors: state.errors.session,
    formType: "Sign Up",
    needEmail: true
});

const mDTP = dispatch => ({
    action: user => dispatch(signup(user)),
});

export default connect(mSTP, mDTP)(SessionForm);
