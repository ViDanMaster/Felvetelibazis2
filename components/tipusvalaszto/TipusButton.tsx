import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './TipusValaszto.style';

interface TipusButtonProps {
  tipus: string;
  tantargy: string;
}

type TipusButtonNavigationProp = {
    navigate: (screen: string, params: { tantargy: string }) => void;
  };

/**
 * Komponens, amely egy tipus gombot reprezentál a tipus választó képernyőn.
 *
 * @param tipus - A feladat típus neve.
 * @param tantargy - A tantárgy neve, amit az előző oldalon a felhasználó kiválasztott
 * @returns - Egy típusválasztó gomb komponenst.
 */
const TipusButton: React.FC<TipusButtonProps> = ({ tipus, tantargy }) => {
  const navigation = useNavigation<TipusButtonNavigationProp>();

  const isTeszt = tipus === 'Teljes Érettségi';

  /**
   * A függvény, ami meghívódik, ha a gombra kattintanak.
   * Amennyiben a tipus 'Teljes Érettségi', átirányít a 'TesztValaszto' képernyőre a tantargy paraméterrel.
   */
  const onPressHandler = () => {
    if (isTeszt) {
      navigation.navigate('TesztValaszto', { tantargy: tantargy });
    }
  };

  return (
    <TouchableOpacity style={styles.tipusButton} onPress={onPressHandler}>
      <Text style={styles.tipusText}>{tipus}</Text>
    </TouchableOpacity>
  );
};

export default TipusButton;