import React from 'react';
import { View } from 'react-native';

import styles from '../tantargyvalaszto/TantargyValaszto.style';

import TantargyButton from '../tantargyvalaszto/TantargyButton';
import { COLORS, images } from '../../constants';
import { StatusBar } from 'expo-status-bar';

/**
 * Komponens, amely a tantárgyválasztó képernyőt reprezentálja.
 * A képernyőn megjelennek a különböző tantárgyak gombjai.  
 *
 * @returns {React.ReactNode} - A tantárgyválasztó képernyő komponense.
 */
const TantargyValaszto = React.memo(() => {
  return (
    <View style={styles.tantargyContainer}>
      <StatusBar style="auto" backgroundColor={COLORS.primary} translucent={false} /> 
      <TantargyButton tantargy='Matematika' imgUrl={images.matematika} />
      <TantargyButton tantargy='Magyar Nyelv és Irodalom' imgUrl={images.magyar} />
      <TantargyButton tantargy='Történelem' imgUrl={images.tortenelem} />
      <TantargyButton tantargy='Angol' imgUrl={images.angol} />
      <TantargyButton tantargy='Fizika' imgUrl={images.fizika} />
      <TantargyButton tantargy='Kémia' imgUrl={images.kemia} />
      <TantargyButton tantargy='Biológia' imgUrl={images.biologia} />
    </View>
  );
},)

export default TantargyValaszto;