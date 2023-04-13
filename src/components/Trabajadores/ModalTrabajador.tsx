import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setIsModalAddTrabajadorOpen } from 'redux/reducers/ViewSlice'
import type { RootState } from 'redux/store'
import Modal from 'react-modal';
import { ModalTrabajadorContainer } from 'assets';


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '60%',
    height: '70%',
    padding: 0,
    backgroundColor: "#fafbfb",
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: '5'
  }
};

const ModalTrabajador = () => {
  const {isModalAddTrabajadorOpen} = useSelector((state: RootState) => state.view)
  const dispatch = useDispatch()

  const closeModal = () => {
      dispatch(setIsModalAddTrabajadorOpen(false))
  }
  return (
    <Modal
      isOpen={isModalAddTrabajadorOpen}
      //onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Modal"
    >
      <div className='flex w-full h-full bg-no-repeat bg-contain bg-center shadow'
        style={{backgroundImage: `url(${ModalTrabajadorContainer})`}}
      >

      </div>
    </Modal>
  )
}

export default ModalTrabajador