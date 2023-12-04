import * as React from 'react';
import Box from '@mui/material/Box';

import Modal from '@mui/material/Modal';

import { useDispatch, useSelector } from 'react-redux';

import { closeModal } from 'redux/cars/slice';
import {
  selectorDataForModal,
  selectorIsOpenModal,
} from 'redux/cars/selectors';
import ModalContent from './ModalContent';

// import { updateContactThunk } from 'redux/cars/thunk';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const ModalCarCard = () => {
  const dispatch = useDispatch();
  const data = useSelector(selectorDataForModal);

  const handleClose = () => dispatch(closeModal());

  React.useEffect(() => {
    const handleKeydown = e => {
      if (e.code === 'Escape') {
        handleClose();
        document.body.style.overflow = 'visible';
      }
    };
    window.addEventListener('keydown', handleKeydown);
    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [handleClose]);

  const onSubmitModal = (name, number, id) => {
    // dispatch(updateContactThunk({ name, number, id }));
    handleClose();
  };
  return (
    <div>
      <Modal
        open={Boolean(data)}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ModalContent data={data}></ModalContent>
      </Modal>
    </div>
  );
};

export default ModalCarCard;
