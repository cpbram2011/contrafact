import React from 'react';
import {connect} from 'react-redux';
import {signup, login, receiveSessionErrors} from '../../actions/session_actions';
import SessionForm from './session_form';
import { openModal, closeModal} from '../../actions/modal_actions'


const mSTP = state => ({
    errors: state.errors.session,
    formType: "Sign Up",
    needEmail: true
});

const mDTP = dispatch => ({
    action: user => dispatch(signup(user)),
    guest: guest => dispatch(login(guest)),
    clearErrors: () => dispatch(receiveSessionErrors([])),
    otherForm: (
        <button onClick={() => dispatch(openModal('signup'))}>
          Signup
        </button>
      ),
    openModal: modal => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal())
});

export default connect(mSTP, mDTP)(SessionForm);
