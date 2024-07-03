import React, { useState, useLayoutEffect } from 'react';
import { View, Text, SafeAreaView, Switch } from 'react-native'

import styles from '../tesztvalaszto/TesztValaszto.style'
import { COLORS, TESZTVALASZTOIMAGES } from "../../constants"

import ToggleBtnGroup from "../tesztvalaszto/ToggleBtnGroup"
import Picker from '../common/Picker'
import MehetButton from '../tesztvalaszto/MehetButton';
import { StatusBar } from 'expo-status-bar';

const TesztValaszto = React.memo(({navigation, route}: {navigation : any, route : any}) => {
  
  const [evszamOff, setEvszamOff] = useState(false);
  const toggleSwitch = () => {
    setEvszamOff(previousState => !previousState);
  }

  const [emelt, setEmelt] = useState(0);
  const [magyarazattal, setMagyarazattal] = useState(0);


  const { tantargy } = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({ title: tantargy });
  }, [navigation, tantargy]);

  const evszamok: string[] = ["2022. Október", "2022. Május", "2021. Október", "2021. Május", "2020. Október", "2020. Május", "2019. Október", "2019. Május", "2018. Október", "2018. Május", "2017. Október", "2017. Május", "2016. Október", "2016. Május", "2015. Október", "2015. Május", "2014. Október", "2014. Május", "2013. Október", "2013. Május", "2012. Október", "2012. Május", "2011. Október", "2011. Május", "2010. Október", "2010. Május", "2009. Október", "2009. Május", "2008. Október", "2008. Május", "2007. Október", "2007. Május", "2006. Október", "2006. Május", "2005. Október"];

  const [selectedIndex1, setSelectedIndex1] = useState(0);
  const [selectedIndex2, setSelectedIndex2] = useState(evszamok.length-1);
  const selectEvszam = (name: string, index: number) => {
    if(name === 'evszamTol'){
      setSelectedIndex1(index)
    }else if(name === 'evszamIg'){
      setSelectedIndex2(index);
    }
  }

  const handleEmeltToggle = (index: number) => {
    setEmelt(index);
  }

  const handleMagyarazattalToggle = (index: number) => {
    setMagyarazattal(index);
  }


  return (
    <SafeAreaView style={styles.screen}>
        <StatusBar style="auto" backgroundColor={COLORS.primary} translucent={false} /> 
        <View style={styles.row13}>
          <ToggleBtnGroup images={[TESZTVALASZTOIMAGES.kozepImg, TESZTVALASZTOIMAGES.emeltImg]} texts={["Közép", "Emelt"]} toggledIndex={emelt} onToggle={handleEmeltToggle}/>
        </View>

        <View style={styles.row2}>
          <View style={styles.evszamPickerContainer}>
            <Picker name='evszamTol' items={evszamok} selectedIndex={selectedIndex1} onTap={(name: string, index: number) => selectEvszam(name, index)}/>
            {!evszamOff && <Text style={styles.kotojel}>–</Text>}
            {!evszamOff && <Picker name='evszamIg' items={evszamok} selectedIndex={selectedIndex2} onTap={(name: string, index: number) => selectEvszam(name, index)}/>}
          </View>
          <View style={styles.egyEvszamContainer}>
            <Text style={styles.switchDescription}>Csak egy évszámot szeretnék</Text>
            <Switch
              trackColor={{false: '#767577', true: COLORS.accentBlue}}
              thumbColor={evszamOff ? COLORS.primary : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={evszamOff}
            />
          </View>
        </View>

        <View style={styles.row13}>
          <ToggleBtnGroup images={[TESZTVALASZTOIMAGES.magyarazattalImg, TESZTVALASZTOIMAGES.magyarazatNelkulImg] /* szted az milyen lenne, ha 'magyarázat nélkül' helyett 'anélkül' lenne írva?*/} texts={["Magyarázattal", "Magyarázat nélkül"]} toggledIndex={magyarazattal} onToggle={handleMagyarazattalToggle}/>
        </View>

        <View style={styles.row4}>
          <MehetButton emelt={emelt} tantargy={tantargy} magyarazattal={magyarazattal} evszamOff={evszamOff} selectedIndex1={selectedIndex1} selectedIndex2={selectedIndex2} />
        </View>
    </SafeAreaView>
  )
}, )

export default TesztValaszto