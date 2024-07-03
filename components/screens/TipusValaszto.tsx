import React, { useLayoutEffect } from 'react';
import { SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import styles from '../tipusvalaszto/TipusValaszto.style';

import TipusButton from '../tipusvalaszto/TipusButton';
import { COLORS } from '@/constants';

/**
 * Komponens, amely a tipus választó képernyőt reprezentálja.
 *
 * @param navigation - A navigációs objektum. (A navigáció miatt kell)
 * @param route - Az útvonal objektum. (Ezzel hozzuk át a tantárgy paramétert)
 * @returns - A tipusválasztó oldalt három tipusgombbal
 */
const TipusValaszto = React.memo(({navigation, route}: {navigation : any, route : any}) => {
  const { tantargy } = route.params;

  /**
   * Beállítja a címet a tantárgy alapján.
   */
  useLayoutEffect(() => {
    navigation.setOptions({ title: tantargy });
  }, [navigation, tantargy]);

  return (
    <SafeAreaView style={styles.tipusContainer}>
      <StatusBar style="auto" backgroundColor={COLORS.primary} translucent={false} /> 
      <TipusButton tipus='Teljes Érettségi' tantargy={tantargy} />
      <TipusButton tipus='Feladattípus Szerint' tantargy={tantargy} />
      <TipusButton tipus='Önértékelés' tantargy={tantargy} />
    </SafeAreaView>
  );
}, )

export default TipusValaszto;
