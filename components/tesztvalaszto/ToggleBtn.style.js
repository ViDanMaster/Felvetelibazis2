import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../constants";

const styles = StyleSheet.create({
    toggleBtnContainer: {
        flex: 1,
        backgroundColor: COLORS.offWhite,
        padding: 20,
        borderRadius: 20,
        shadowOffset: { width: 12, height: 12 },
        shadowRadius: 12,
        shadowColor: '#0a234d',
        shadowOpacity: 0.5,
        elevation: 10,
    },
    toggleBtnContainerOn: {
        flex: 1,
        padding: 15,
        borderRadius: 20,
        backgroundColor: COLORS.accentYellow,
        borderColor: COLORS.primary,
        borderWidth: 5,
    },
    toggleBtnImg: {
        width: '100%',
        resizeMode: 'contain',
        flex: 1,
    },
})

export default styles