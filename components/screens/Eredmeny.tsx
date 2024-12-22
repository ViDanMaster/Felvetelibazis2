import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

import styles from '../eredmeny/Eredmeny.style';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feladat } from '../database/Feladat';
import { FlashList } from '@shopify/flash-list';
import EredmenyCard from '../eredmeny/EredmenyCard';
import { useValaszokContext } from '../Feladatok/ValaszokContext';

interface ResultProps {
  navigation: any;
  route: any;
}

const Result = React.memo(({ navigation, route }: ResultProps) => {
  const { Pontszam   } = route.params;
  const { answeredQuestions, feladatok } = useValaszokContext();
  const [osszPontszam, setOsszPontszam] = useState<number>(1);
  const [erdemjegy, setErdemjegy] = useState<number>(0);
  const [erdemjegyStyle, setErdemjegyStyle] = useState<any>({});
  
  const Szazalek = roundTo((Pontszam / osszPontszam) * 100, 2);

  function roundTo(n: number, digits: number) {
    if (digits === undefined) {
      digits = 1;
    }
  
    var multiplicator = Math.pow(10, digits);
    n = parseFloat((n * multiplicator).toFixed(11));
    var test =(Math.round(n) / multiplicator);
    return +(test.toFixed(digits));
  }

  useEffect(() => {
    OsszPontszamSzamolas();
  }, [feladatok]);

  useEffect(() => {
    ErdemjegySzamolas();
  }, [osszPontszam])

  const OsszPontszamSzamolas = () => {
    let OsszPontszam = 0;
    feladatok.forEach((element: Feladat) => {
      OsszPontszam += element.Pont;
    });
    setOsszPontszam(OsszPontszam);
  };

  const ErdemjegySzamolas = () => {
    switch (true) {
      case Szazalek < 25.0:
        setErdemjegy(1);
        setErdemjegyStyle({ color: '#ff0000' });
        break;
      case Szazalek < 40.0:
        setErdemjegy(2);
        setErdemjegyStyle({ color: '#ff6600'});
        break;
      case Szazalek < 60.0:
        setErdemjegy(3);
        setErdemjegyStyle({ color: '#ffff66'});
        break;
      case Szazalek < 80.0:
        setErdemjegy(4);
        setErdemjegyStyle({ color: '#ccff66'});
        break;
      case Szazalek >= 80.0:
        setErdemjegy(5);
        setErdemjegyStyle({ color: '#00ff00'});
        break;
    }
  };

  const renderItem = ({ item, index }: { item: Feladat; index: number }) => {
    const selectedAnswerForQuestion = answeredQuestions[index].selectedAnswerIndex;

    const pontszam = selectedAnswerForQuestion === (item.Megoldas - 1) ? item.Pont : 0;

    return (
      <EredmenyCard
        pontszam={pontszam}
        index={index+1}
        feladat={item}
      />
    );
  };

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.pontszamHeader}>
        <View style={styles.pontszamContainer}>
          <Text style={styles.pontszamHeaderText}>Pontszám:</Text>
          <Text style={[styles.pontszamText, styles.pontszam]}>
            {Pontszam}/{osszPontszam}
          </Text>
        </View>
        <View style={styles.szazalekContainer}>
          <Text style={styles.pontszamHeaderText}>Százalék:</Text>
          <Text style={[styles.pontszamText, styles.szazalek]}>{Szazalek}%</Text>
        </View>
        <View style={styles.erdemjegyContainer}>
          <Text style={styles.pontszamHeaderText}>Érdemjegy:</Text>
          <Text style={[styles.pontszamText, erdemjegyStyle]}>{erdemjegy}</Text>
        </View>
      </View>
      <FlashList
        data={feladatok}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        estimatedItemSize={145}
        overScrollMode='never'
      />
    </SafeAreaView>
  );
}, (prevProps, nextProps) => {
  return prevProps.route.Pontszam === nextProps.route.Pontszam;
});

export default Result;
