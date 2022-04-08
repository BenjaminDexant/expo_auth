import Constants from "expo-constants";
import { StyleSheet } from 'react-native';

const StatusBarHeight = Constants.statusBarHeight;

// colors
export const Colors = {
    primary: "#03363D",
    secondary: "#174D4D",
    white: "#FFFFFF",
    grey: "#F8F9F9",
};

const { primary, secondary, white, grey } = Colors;

export const Container = StyleSheet.create({
    main: {
        flex: 1,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: StatusBarHeight + 10,
        backgroundColor: white,
    },
    inner: {
        flex: 1,
        width: "100%",
        alignItems: "center",
        backgroundColor: grey
    }
});

export const Form = StyleSheet.create({
    main: {
        width: "90%",
    },
    input: {
        backgroundColor: white,
        padding: 15,
        paddingLeft: 55,
        paddingRight: 55,
        marginVertical: 3,
        marginBottom: 10,
        borderRadius: 5,
        height: 50,
        fontSize: 16,
        color: secondary,
    },
    label: {
        fontSize: 16,
        color: secondary,
        textAlign: "left",
    },
    icon: {
        position: "absolute",
        left: 10,
        top: 32,
        zIndex: 1,
    },
    button: {
        padding: 15,
        backgroundColor: primary,
        borderRadius: 5,
        marginVertical: 5,
        height: 50,
    },
    buttonText: {
        color: white,
        fontSize: 16,
    }
});

export const Title = StyleSheet.create({
    main: {
        fontSize: 32,
        fontWeight: "bold",
        textAlign: "center",
        color: primary,
        padding: 1,
    },
    sub: {
        fontSize: 18,
        fontWeight: "bold",
        marginTop: 2,
        letterSpacing: 1,
        color: secondary,
    }
});


export const Logo = StyleSheet.create({
    main: {
        width: "100%",
        height: "30%",
    }
});
