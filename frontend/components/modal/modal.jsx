import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import LoginFormContainer from '../session_form/login_form_container';
import SignupFormContainer from '../session_form/signup_form_container';
import Form from '../form/form_container'
import PlaylistForm from '../form/playlist_container';
import AddPlaylist from '../form/add_playlist_container';



function Modal({modal, closeModal, ownProps}) {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal.type) {
    case 'login':
      component = <LoginFormContainer />;
      break;
    case 'signup':
      component = <SignupFormContainer />;
      break;
    case 'form':
      component = <Form />;
      break;
    case 'playlistForm':
      component = <PlaylistForm />;
      break;
    case 'addSong':
      component = <AddPlaylist songId={modal.id}/>;
      break;
    default:
      return null;
  }
  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        { component }
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    modal: state.ui.modal,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
