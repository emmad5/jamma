import React from 'react';
import { closeModal } from '../actions/modal_actions';
import { connect } from 'react-redux';
import HappyHourShow from './profile/happy_hour_show';
import './modalstyle.css'

function Modal({ modal, closeModal }) {
    if (!modal) {
        return null;
    }
    let component;
    let modal_class;
    switch (modal) {
        case 'happyhour':
            modal_class = 'modal-background';
            component = <HappyHourShow/>
            break;
        default:
            return null;
    }
    return (
        <div className={modal_class} onClick={closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        modal: state.ui.modal
    };
};

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);