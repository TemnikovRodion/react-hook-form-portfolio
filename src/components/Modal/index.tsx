import React from 'react';
import ReactModal from 'react-modal';

//Импорт компонентов
import Icon from '../../modules/Icon';
import MultiStepFrom from '../MultiStepForm';

//Импорт стилей
import './styles.scss';

ReactModal.setAppElement('#root');

type Props = {
    closeModal: () => void,
    modalIsOpen: boolean
}

const Modal = ({ modalIsOpen, closeModal }: Props): React.ReactElement => {
    return (
        <div>
            <ReactModal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                className='modal_wrapper'
            >
                <div className='modal_window'>
                    <div className='modal_title'>
                        <h2>Заполните форму</h2>
                        <button className='btn_close' onClick={closeModal}><Icon name="close" size={20} /></button>
                    </div>
                    <MultiStepFrom closeModal={closeModal} />
                </div>
            </ReactModal>
        </div>
    );
}

export default Modal;