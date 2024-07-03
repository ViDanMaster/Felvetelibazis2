import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../constants";

const styles = StyleSheet.create({
    tipusContainer: {
        flex: 1,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    tipusButton: {
        flex: 1,
        width: '90%',
        marginBottom: 20,
        backgroundColor: '#F8F8FF',
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',

        shadowOffset: { width: 12, height: 12 },
        shadowRadius: 12,
        shadowColor: '#0a234d',
        shadowOpacity: 0.5,
        elevation: 10,
    },
    tipusText: {
        fontSize: 22,
        textAlign: 'center',
        textTransform: 'uppercase',
    },
  })

export default styles