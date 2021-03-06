import React from 'react';
import {connect} from 'react-redux';
import {login, receiveSessionErrors} from '../../actions/session_actions';
import SessionForm from './login_form'
import { openModal, closeModal} from '../../actions/modal_actions'

const mSTP = state => ({
    errors: state.errors.session,
    formType: "Log In"
});

const mDTP = dispatch => ({
    action: user => dispatch(login(user)),
    guest: guest => dispatch(login(guest)),
    clearErrors: () => dispatch(receiveSessionErrors([])),
    otherForm: (
        <button onClick={() => dispatch(openModal('login'))}>
          Signup
        </button>
      ),
    openModal: modal => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal())
});

export default connect(mSTP, mDTP)(SessionForm)



