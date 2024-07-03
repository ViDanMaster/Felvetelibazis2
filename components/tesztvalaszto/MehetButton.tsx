import React, {  } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { EVSZAMOK } from '../../constants/TesztValasztoConstants.js';

import styles from './TesztValaszto.style.js';
import { useValaszokContext } from '../Feladatok/ValaszokContext';
import { useDatabase } from '../database/Db';

interface MehetButtonProps {
  emelt: number;
  tantargy: string;
  magyarazattal: number;
  evszamOff: boolean;
  selectedIndex1: number;
  selectedIndex2: number;
}

type MehetButtonNavigationProps = {
  navigate: (screen: string) => void;
};

const generateRandomIndex = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const MehetButton: React.FC<MehetButtonProps> = ({
  emelt,
  tantargy,
  magyarazattal,
  evszamOff,
  selectedIndex1,
  selectedIndex2,
}) => {
  const navigation = useNavigation<MehetButtonNavigationProps>();
  const {setAnsweredQuestions, setEllenorizve, setFeladatok} = useValaszokContext();
  const db = useDatabase();

  async function handleFetchFeladatok() {
  try {
    const result_1 = await db.fetchAllData();
    setFeladatok(result_1);
    const initialEllenorizve = result_1.map(() => false);
    setEllenorizve(initialEllenorizve);
    const initialAnsweredQuestions = result_1.map((_, index) => ({ index, selectedAnswerIndex: -1 }));
    setAnsweredQuestions(initialAnsweredQuestions);
    return result_1;
  } catch (err) {
    console.error('Error fetching feladatok: ', err);
  }
}

  function onPressHandler() {
    const [start, end] = [selectedIndex1, selectedIndex2].sort();
    const randomIndex = generateRandomIndex(start, end);
    const selectedEvszam = evszamOff ? EVSZAMOK[selectedIndex1] : EVSZAMOK[randomIndex];
    handleFetchFeladatok().then((result) => {
      setTimeout(() => {
        navigation.navigate('FeladatKitolto')
      }, 75); 
    });
  }

  return (
    <TouchableOpacity style={styles.mehetBtn} onPress={onPressHandler}>
      <Text style={styles.mehetBtnText}>Mehet</Text>
    </TouchableOpacity>
  );
};

export default MehetButton;
