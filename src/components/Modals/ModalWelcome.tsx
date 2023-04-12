import React from 'react'

import Modal from 'react-modal';

import type { RootState } from 'redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { setIsModalWelcomeOpen } from 'redux/reducers/ViewSlice'



const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
const ModalWelcome = () => {
    const {isModalWelcomeOpen} = useSelector((state: RootState) => state.view)
    const dispatch = useDispatch()

    const closeModal = () => {
        dispatch(setIsModalWelcomeOpen(false))
    }

    return (
        <Modal
            isOpen={isModalWelcomeOpen}
            //onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
        >
            <button onClick={closeModal}>close</button>
            <div>I am a modal</div>
            <form>
                <input />
                <button>tab navigation</button>
                <button>stays</button>
                <button>inside</button>
                <button>the modal</button>
            </form>
        </Modal>
    )
}

export default ModalWelcome