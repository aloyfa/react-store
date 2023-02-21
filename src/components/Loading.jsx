import React from 'react';
import { Modal } from 'react-bootstrap';
import styles from './Loading.module.css'

const Loading = () => {
  return (
    <Modal size="sm" show backdrop="static" className={styles.modal}>
        <img
          src="https://discuss.wxpython.org/uploads/default/original/2X/6/6d0ec30d8b8f77ab999f765edd8866e8a97d59a3.gif"
          alt="spinner loader"
          width="100px"
          height="100px"
        />
    </Modal>
  );
};

export default Loading;
