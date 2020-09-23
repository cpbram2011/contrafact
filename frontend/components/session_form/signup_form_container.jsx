import React from 'react';
import {connect} from 'react-redux';
import {signup, receiveSessionErrors} from '../../actions/session_actions';
import SessionForm from './session_form';

const mSTP = state => ({
    errors: state.errors.session,
    formType: "Sign Up",
    needEmail: true
});

const mDTP = dispatch => ({
    action: user => dispatch(signup(user)),
    clearErrors: () => dispatch(receiveSessionErrors([]))

});

export default connect(mSTP, mDTP)(SessionForm);
