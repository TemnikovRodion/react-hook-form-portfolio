import React, { useState, useCallback } from 'react';

//Импорт компонентов
import Modal from '../../components/Modal';
import Table from '../../components/Table';

//Импорт стилей
import './styles.scss';

type Props = {

};

const Main = ({ }: Props): React.ReactElement => {

    const [modalIsOpen, setIsOpen] = useState(false);

    const openModal = useCallback(() => {
        setIsOpen(true);
    }, [setIsOpen])

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div id='main'>
            <div className='main_title'>
                <h2>Чтобы добавить данные в таблицу нажмите на кнопку</h2>
                <button className='modal_btn' onClick={openModal}>Добавить</button>
            </div>
            <Modal modalIsOpen={modalIsOpen} closeModal={closeModal} />
            <Table />
        </div>
    )
}


export default Main;