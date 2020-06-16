/* eslint-disable prettier/prettier */
import React from 'react';
import {Modal, View, StyleSheet} from 'react-native';

const ModalGlobal = ({children, modalVisible}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => console.log('closed')}>
      {children}
    </Modal>
  );
};

export default ModalGlobal;
