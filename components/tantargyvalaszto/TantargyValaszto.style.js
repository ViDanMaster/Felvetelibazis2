import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../constants";

const styles = StyleSheet.create({
    tantargyContainer: {
        flex: 1,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    },

    tantargyButton: {
        backgroundColor: '#F8F8FF',
        shadowOffset: { width: 12, height: 12 },
        shadowRadius: 12,
        shadowColor: '#0a234d',
        shadowOpacity: 0.5,
        elevation: 10,
        width: '90%',
        height: 80,
        marginBottom: 20,
        flexDirection: 'row',
        borderRadius: 10,
    },
    imageContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 10,
        marginRight: 10,
    },
    tantargyImage: {
        height: '80%',
        resizeMode: 'center',
    },
    textContainer: {
        flex: 4,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        marginRight: 10,
    },
    tantargyText: {
        fontSize: 22,
        color: '#121212',
        textTransform: 'uppercase',
        textAlign: 'center',
    },

})

export default styles