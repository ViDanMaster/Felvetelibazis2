import React from 'react';
import { Modal, Pressable, Text, View } from 'react-native';
import styles from './Magyarazat.style';
import MathJaxSvgHtml from '../common/MathJaxSvgHtml';
import MathJaxSvgHtmlWithoutFeladat from '../common/MathjaxSvg/MathJaxSvgHtmlWithoutFeladat';

interface MagyarazatProps {
    closeModal: () => void,
    magyarazat: string,
}

const Magyarazat: React.FC<MagyarazatProps> = ({closeModal, magyarazat}) => {
  return (
    <View style={styles.modalContainer}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={true}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <MathJaxSvgHtmlWithoutFeladat fontSize={16} text={magyarazat} />
            <Pressable style={styles.closeButton} onPress={closeModal}>
              <Text style={styles.closeButtonText}>Bezárás</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Magyarazat