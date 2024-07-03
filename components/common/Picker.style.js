import { StyleSheet } from "react-native"

import { COLORS, FONT, SIZES } from "../../constants"

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        backgroundColor: 'white',
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        height: '80%',
        width: '80%',
    },
    modalScrollView: {
        alignItems: 'flex-start',
        paddingLeft: 35,
        paddingRight: 35,
        paddingTop: 25,
    },
    evszamText: {
        marginBottom: 25,
        fontSize: 16,
    },
    megseButton: {
        padding: 10,
        borderTopColor: '#F3F3F3',
        borderTopWidth: 1
    },
    megseText: {
        color: COLORS.primary,
        fontWeight: 'bold',
        textAlign: 'right',
        marginRight: 20,
        marginBottom: 10,
        marginTop: 10,
        fontSize: 16,
    },
    container: {
        flex: 1,
    },
    pickerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    pickerText: {
        fontSize: 20,
        borderBottomColor: COLORS.gray,
        borderBottomWidth: 1,
    }
})

export default styles