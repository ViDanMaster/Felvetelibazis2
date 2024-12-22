import { StyleSheet, Dimensions } from "react-native";

import { COLORS, FONT, SIZES } from "../../constants";

const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

const circleSize = Math.min(windowWidth * 0.1, 60);
const fontSize = Math.min(windowWidth * 0.045, 24);

const styles = StyleSheet.create({
    kerdesScrollView: {
        height: windowHeight - 80,
    },
    kerdesContentContainer: {
        flex: 1,
        marginLeft: circleSize * 0.5
      },
    kerdesWrapper: {
        width: windowWidth,
      },
    kerdesContainer: {
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        flexShrink: 1,
        marginRight: 15,
        marginLeft: 15,
        marginTop: 20,
        marginBottom: 5,
        padding: windowWidth * 0.03,
        borderRadius: 5,
        backgroundColor: "#FFFFFF",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
      },
    kerdesMathJax: {
        backgroundColor:'transparent',
    },
    screen: {
        flex: 1,
        backgroundColor: "#fff9ec",
    },
    navContainer: {
        backgroundColor: "#fff9ec",
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    navBar: {
        flex: 1,
        width: "90%",
        justifyContent: 'center',
        flexDirection: 'row',
        paddingBottom: 10,
        paddingTop: 10,
    },
    navBtnContainer: {
        flex: 1,
    },
    nextOrPrevBtn:{
        width: 56,
        flex: 1,
        justifyContent: 'center',
    },
    nextOrPrevBtnIcon: {
        textShadowColor: "#000",
        textShadowOffset: {
            width: 1,
            height: 0,
        },
        shadowOpacity: 0.22,
        textShadowRadius: 2.22,
        elevation: 3,
        textAlign: 'center',
    },
    prev: {
        alignItems: 'flex-end',
    },
    ellenorzesBtnContainer: {
        flex: 1.75,
        marginRight: 10,
        marginLeft: 10,
    },
    ellenorzesBtn: {
        paddingVertical: 15,
        paddingHorizontal: 15,
        borderRadius: 20,
    },
    activeBtn: {
        backgroundColor: COLORS.primary,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    inActiveBtn: {
        backgroundColor: "#e2e2e2",
    },
    ellenorzesBtnText: {
        fontSize: 22,
        textAlign: 'center',
    },
    activeText: {
        color: COLORS.whiteText,
    },
    inActiveText: {
        color: "#777777",
    },
    feladatSzamText: {
        fontSize: fontSize,
        fontWeight: '800',
    },
    feladatSzamTextContainer: {
        width: circleSize,
        height: circleSize,
        borderRadius: circleSize / 2,
        backgroundColor: "#FFFFFF",
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
        zIndex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        left: windowWidth * 0.01,
        top: windowWidth * 0.01,
    },
    text: {
        fontSize: 16,
        color: 'black',
        fontWeight: 'normal',
        fontStyle: 'normal',
    },
})

export default styles