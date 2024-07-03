import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../constants";

const styles = StyleSheet.create({
    screen: {
      flex: 1,
      marginTop: 20,
    },
    row13: {
      flex: 1,
    },   
    row4: {
      flex: 1.4,
    },
    row2: {
      flex: 0.9,
    },
    evszamPickerContainer: {
      flex: 1,
      flexDirection: 'row',
      marginTop: 5,
      justifyContent: 'center',
      alignItems: 'center',
    },
    kotojel: {
      fontSize: 20,
    },
    egyEvszamContainer: {
      flex: 0.5,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      paddingLeft: 20,
      paddingRight: 20,
      marginBottom: 20,
    },
    switchDescription: {
      marginRight: 10,
    },
    mehetBtn: {
      flex: 1,
      backgroundColor: COLORS.primary,
      margin: 50,
      alignItems: 'center',
      justifyContent: 'center',
    },
    mehetBtnText: {
      fontSize: 40,
      color: 'white',
      textTransform: 'uppercase',
    },
  })

export default styles