import React from 'react';
import { View } from 'react-native';
import { MathJaxSvg } from '../common/MathjaxSvg/index';
import styles from '../Feladatok/Feladat.style'

const YourComponent = ({ feladat}) => {
  return (
    <View>
      <MathJaxSvg fontSize={16} customStyle={styles.text} >
        {`<div><p style="display: inline;>${feladat}</p></div>`}
      </MathJaxSvg>
    </View>
  );
};

export default YourComponent;