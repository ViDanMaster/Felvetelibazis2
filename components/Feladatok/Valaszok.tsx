import React, { memo } from 'react';
import { TouchableOpacity } from 'react-native';

import styles from './Valaszok.style';
import MathJaxSvgHtmlWithoutFeladat from '../common/MathjaxSvg/MathJaxSvgHtmlWithoutFeladat';

interface ValaszokProps {
  valasz: string;
  isSelected: boolean;
  onSelection: () => void;
  jo: boolean;
  ellenorizve: boolean;
}

const Valaszok: React.FC<ValaszokProps> = React.memo(
  ({ valasz, isSelected, onSelection, jo, ellenorizve }) => {
    Valaszok.displayName = "Valaszok";
    
    let itemStyle = styles.unSelected;
    if (isSelected && !ellenorizve) {
      itemStyle = styles.selected;
    } else if (isSelected && ellenorizve && !jo) {
      itemStyle = styles.selectedRossz;
    } else if (ellenorizve && jo) {
      itemStyle = styles.selectedHelyes;
    }

    return (
      <TouchableOpacity
        style={[styles.valaszButton, itemStyle]}
        onPress={onSelection}
        disabled={ellenorizve}
      >
        <MathJaxSvgHtmlWithoutFeladat text={`<span class='valasz' style='overflow: hidden;'>${valasz}</span>`} fontSize={18} />
      </TouchableOpacity>
    );
  },(prevProps, nextProps) => {
    return JSON.stringify(prevProps) === JSON.stringify(nextProps);
  });

export default Valaszok;
