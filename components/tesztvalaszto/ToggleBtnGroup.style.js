import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../constants";

const styles = StyleSheet.create({
  groupContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  btnGroup: {
    flex: 1,
    alignItems: 'center'
  },
  btnContainer: {
    flex: 1,
    width: '75%',
  },
  description: {
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    marginBottom: 10,
    fontSize: 14,
  },
})

export default styles