import React from 'react';
import { View } from 'react-native';
import { MathJaxSvg } from '../MathjaxSvg/index';

const MathJaxSvgHtmlWithoutFeladat = ({ text, fontSize, customStyle=null}) => {
  return (
    <View>
      <MathJaxSvg fontSize={fontSize} customStyle={customStyle} >
        {text}
      </MathJaxSvg>
    </View>
  );
};

export default MathJaxSvgHtmlWithoutFeladat;