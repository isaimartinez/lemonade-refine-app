import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setIsModalAddPrestamistaOpen } from 'redux/reducers/ViewSlice'
import type { RootState } from 'redux/store'
import Modal from 'react-modal';
import { ModalPrestamistaContainer } from 'assets';


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

const ModalPrestamista = () => {
  const {isModalAddPrestamistaOpen} = useSelector((state: RootState) => state.view)
  const dispatch = useDispatch()

  const closeModal = () => {
      dispatch(setIsModalAddPrestamistaOpen(false))
  }
  return (
    <Modal
      isOpen={isModalAddPrestamistaOpen}
      //onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Modal"
    >
      <div className='flex w-full h-full bg-no-repeat bg-contain bg-center shadow'
        style={{backgroundImage: `url(${ModalPrestamistaContainer})`}}
      >

      </div>
    </Modal>
  )
}

export default ModalPrestamista