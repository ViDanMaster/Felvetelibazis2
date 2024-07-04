import React from 'react';
import { View } from 'react-native';
import { MathJaxSvg } from '../common/MathjaxSvg/index';
import styles from '../Feladatok/Feladat.style'

const MathJaxSvgHtml = ({ feladat, fontSize}) => {
  return (
    <View>
      <MathJaxSvg fontSize={fontSize} customStyle={styles.text} >
        {`<div><p style="display: inline;">${feladat}</p></div>`}
      </MathJaxSvg>
    </View>
  );
};

export default MathJaxSvgHtml;