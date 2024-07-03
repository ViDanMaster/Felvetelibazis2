import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation, RouteProp } from '@react-navigation/native';

import styles from './TantargyValaszto.style';
import { ImageSourcePropType } from 'react-native';


interface TantargyButtonProps {
  tantargy: string;
  imgUrl: ImageSourcePropType;
}

type TantargyButtonNavigationProp = {
  navigate: (screen: string, params: { tantargy: string }) => void;
};

/**
 * Komponens, amely egy tantárgy gombot reprezentál a választó képernyőn.
 *
 * @param {string} tantargy - A tantárgy neve. (string)
 * @param {ImageSourcePropType} imgUrl - A tantárgyhoz tartozó kép forrása. (ImageSourcePropType)
 * @returns {React.FC} - A tantárgy gomb komponenst.
 */
const TantargyButton: React.FC<TantargyButtonProps> = ({ tantargy, imgUrl }) => {
  const navigation = useNavigation<TantargyButtonNavigationProp>();

  /**
   * A tantárgy gomb lenyomásakor történő függvény.
   * Átvisz a "TipusValaszto" képernyőre a tantárgy paraméterrel.
   * @param {string} tantargy - A tantárgy neve. (string)
   */
  const handlePress = () => {
    navigation.navigate('TipusValaszto', { tantargy });
  };

  return (
    <TouchableOpacity style={styles.tantargyButton} onPress={handlePress}>
      <View style={styles.imageContainer}>
        <Image source={imgUrl} style={styles.tantargyImage} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.tantargyText}>{tantargy}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default TantargyButton;
